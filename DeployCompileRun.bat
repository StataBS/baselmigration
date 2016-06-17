copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatACountriesMigr.csv" "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatAFlowDataMigr.csv"  "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatACountriesUmzAlle.csv"  "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatAFlowDataUmzAlle.csv"   "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatAFlowDataUmzSchweiz.csv"   "C:\dev\workspace\baselmigration\data\" 
copy "P:\6_Werkzeugkiste\Transfer\jb - jonas bieri\StatAFlowDataUmzAusland.csv"   "C:\dev\workspace\baselmigration\data\" 


rem grunt --force
start grunt StatAMigr
start grunt StatAUmz
start grunt StatAUmzCH
start grunt StatAUmzA

rem start web server
npm start
