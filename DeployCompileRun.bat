copy "P:\6_Werkzeugkiste\Transfer\jb\StatACountriesMigr.csv" "C:\dev\workspace\globalmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb\StatAFlowDataMigr.csv"  "C:\dev\workspace\globalmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb\StatACountriesUmz.csv"  "C:\dev\workspace\globalmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb\StatAFlowDataUmz.csv"   "C:\dev\workspace\globalmigration\data\" 


rem grunt --force
start grunt StatAUmz
start grunt StatAMigr

rem start web server
npm start
