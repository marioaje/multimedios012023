import mysql.connector

mydb = mysql.connector.connect(
  host="sql863.main-hosting.eu",
  user="u484426513_masterPro",
  password="@EqaYJ9tQU0",
  database="u484426513_masterPro"
)    
        

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM customers")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)