$MyDir = [IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Definition)
$projectDir = [IO.Path]::GetDirectoryName($MyDir)
$ghpagesDir = "$projectDir.gh-pages"
$branchName = "gh-pages"
$remoteName = "origin"

$branches = git branch --list | ? { $_ -match $branchName }
$branchMissing = !$branches

function Copy-GhpagesContent ($projectDir, $ghpagesDir) {
    cp "$projectDir\dist\*" "$ghpagesDir\" -Recurse
    cp "$projectDir\dist\test.style.default.html" "$ghpagesDir\index.html"
}

if ((Test-Path $ghpagesDir -PathType Container) -and (Test-Path "$ghpagesDir\.git" -PathType Leaf))
{
    Write-Host "GitHub pages found at $ghpagesDir"
    cd $ghpagesDir
    git reset --hard
    git pull
}
else
{
    Write-Host "Creating GitHub pages at $ghpagesDir"
    if (!(Test-Path $ghpagesDir -PathType Container))
    {
        $_ = mkdir $ghpagesDir
    }
    if ($branchMissing)
    {
        cd $projectDir
        git worktree add -f "$ghpagesDir" master
        cd $ghpagesDir
        git checkout --orphan $branchName
        git rm -rf .
    }
    else
    {
        cd $projectDir
        git worktree add "$ghpagesDir" $branchName
        cd $ghpagesDir
        git pull
    }
}

Remove-Item "$ghpagesDir\*" -Exclude ".git", ".gitignore" -Recurse -Force

Copy-GhpagesContent $projectDir $ghpagesDir

cd $ghpagesDir
git add -A :/
git commit -m "Automatic Update"
