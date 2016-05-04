copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatACountriesMigr.csv" "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatAFlowDataMigr.csv"  "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatACountriesUmz.csv"  "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatAFlowDataUmz.csv"   "C:\dev\workspace\baselmigration\data\" 


rem grunt --force
start grunt StatAUmz
start grunt StatAMigr

rem start web server
npm start
