$MyDir = [IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Definition)
$ProjDir = [IO.Path]::GetDirectoryName($MyDir)
$Ghwd = "$ProjDir.gh-pages"
$branchName = "gh-pages"

$branches = git branch --list | ? { $_ -match $branchName }
$branchMissing = !$branches

function Copy-GhpagesContent ($projectDir, $ghpagesDir) {
    cp "$projectDir\dist\*" "$ghpagesDir\" -Recurse
    cp "$projectDir\dist\test.style.default.html" "$ghpagesDir\index.html"
}

if ((Test-Path $Ghwd -PathType Container) -and (Test-Path "$Ghwd\.git" -PathType Leaf))
{
    Write-Host "GitHub pages found at $Ghwd"
    cd $Ghwd
    git reset --hard
    git pull
}
else
{
    Write-Host "Creating GitHub pages at $Ghwd"
    if (!(Test-Path $Ghwd -PathType Container))
    {
        $_ = mkdir $Ghwd
    }
    if ($branchMissing)
    {
        cd $ProjDir
        git worktree add -f "$Ghwd" master
        cd $Ghwd
        git checkout --orphan $branchName
        git rm -rf .
    }
    else
    {
        git worktree add "$Ghwd" $branchName
        cd $Ghwd
        git pull
    }
}

Remove-Item "$Ghwd\*" -Exclude ".git", ".gitignore" -Recurse -Force

Copy-GhpagesContent $ProjDir $Ghwd

cd $Ghwd
git add -A :/
git commit -m "Automatic Update"
