copy *.html gh-pages\baselmigration\ /y
copy *.png gh-pages\baselmigration\ /y
copy license-mit gh-pages\baselmigration /y
md gh-pages\baselmigration\dist
copy dist\*.* gh-pages\baselmigration\dist\ /y
md gh-pages\baselmigration\images\
copy images\*.* gh-pages\baselmigration\images\ /y
md gh-pages\baselmigration\json\
copy json\*.* gh-pages\baselmigration\json\ /y
