import pymysql

class Database:
    def __init__(self):
        self.connection = pymysql.connect(
            host = 'sql863.main-hosting.eu',#host o ip de la base datos
            user = 'u484426513_mvc',#usuario de la base datos
            password = '#7cYr646u@*Rp.P',#password de la base datos
            db = 'u484426513_mvc'#nombre de la base datos
        )
        self.cursor = self.connection.cursor()#crea la conexion hacia la base de datos
        print('Estoy conectado a la base de datos')

    def getCurso(self):
        sql = 'SELECT id, nombre, descripcion, tiempo, usuario FROM curso'

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)

            curso = self.cursor.fetchall()#invoca todos los resultados que tenga
            #print(curso)
            #recorre el curso para ver los datos
            for item in curso:
                print('id', item[0])
                print('nombre',item[1])
                print('descripcion',item[2])
                print('tiempo',item[3])
                print('usuario',item[4])
                print('-----------------\n')

        except Exception as e:
            print('Error: ', e )
            raise

    def getCursoById(self, id):
            sql = 'SELECT id, nombre, descripcion, tiempo, usuario FROM curso WHERE id={}'.format(id)

            try:#atrapa los errores y no permite que la aplicacion se congele o caiga
                self.cursor.execute(sql)

                curso = self.cursor.fetchone()#invoca un resultado que tenga
                #print(curso)
            
                print('id', curso[0])
                print('nombre',curso[1])
                print('descripcion',curso[2])
                print('tiempo',curso[3])
                print('usuario',curso[4])
                print('-----------------\n')

            except Exception as e:
                print('Error: ', e )
                raise  

    def getCursoByNombre(self, nombre):
            sql = 'SELECT id, nombre, descripcion, tiempo, usuario FROM curso WHERE nombre like "%{}%"'.format(nombre)

            try:#atrapa los errores y no permite que la aplicacion se congele o caiga
                self.cursor.execute(sql)

                curso = self.cursor.fetchall()#invoca todos los resultados que tenga
                #print(curso)
                #recorre el curso para ver los datos
                for item in curso:
                    print('id', item[0])
                    print('nombre',item[1])
                    print('descripcion',item[2])
                    print('tiempo',item[3])
                    print('usuario',item[4])
                    print('-----------------\n')

            except Exception as e:
                print('Error: ', e )
                raise  

    def deleteCursoById(self, id):
        #print(id, nombre)
        sql = "DELETE FROM `curso`WHERE id='{}'".format(id)

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)
            self.connection.commit()#commit a la base de datos(update, insert, delete)
            print('Se elimino el registro: ', id)
        except Exception as e:
            print('Error: ', e )
            raise   

    def updateCursoById(self, id, nombre):
        #print(id, nombre)
        sql = "UPDATE curso SET nombre='{}' WHERE id='{}'".format(nombre, id)

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)
            self.connection.commit()#commit a la base de datos(update, insert, delete)

        except Exception as e:
            print('Error: ', e )
            raise   

    def updateCursoTiempoById(self, id, tiempo):
        #print(id, tiempo)
        sql = "UPDATE curso SET tiempo='{}' WHERE id='{}'".format(tiempo, id)

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)
            self.connection.commit()#commit a la base de datos(update, insert, delete)

        except Exception as e:
            print('Error: ', e )
            raise    

    def updateCursoTotalById(self, id, nombre, descripcion, tiempo, usuario):
        #print(id, tiempo)
        sql = "UPDATE curso SET nombre='{}', descripcion='{}', tiempo='{}', usuario='{}' WHERE id='{}'".format(nombre, descripcion, tiempo, usuario, id)

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)
            self.connection.commit()#commit a la base de datos(update, insert, delete)

        except Exception as e:
            print('Error: ', e )
            raise  

    def createCurso(self, nombre, descripcion, tiempo, usuario):
        #print(id, tiempo)
        sql = "INSERT INTO curso(id, nombre, descripcion, tiempo, usuario) VALUES ('{}','{}','{}','{}','{}')".format(0, nombre, descripcion, tiempo, usuario)

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)
            self.connection.commit()#commit a la base de datos(update, insert, delete)

        except Exception as e:
            print('Error: ', e )
            raise  

    def delCurso(self, id ):
        #print(id, tiempo)
        sql = "DELETE FROM `curso` WHERE id='{}'".format(id)

        try:#atrapa los errores y no permite que la aplicacion se congele o caiga
            self.cursor.execute(sql)
            self.connection.commit()#commit a la base de datos(update, insert, delete)

        except Exception as e:
            print('Error: ', e )
            raise  

try:#atrapa los errores y no permite que la aplicacion se congele o caiga
    database = Database()#crea una variable de tipo Databased
    
   #database.createCurso('Curso Python UCR', 'Python Avanzado','8 Semanas', 'Prof Mario')
    #database.getCurso()#invoca la funcion de obtener todos los cursos.
    # database.deleteCursoById(409)
    # database.getCursoByNombre("2023")
    #database.getCursoById(399)#invoca la funcion de obtener un curso especifico
    #(id, nombre)
    # database.updateCursoTotalById(399, 'Curso Abril Python nuevo test desc', 'Curso Avanzado', '8 Semanas Intensivo', 'Prof Mario J')
    # database.getCursoById(399)

except Exception as e:
    print('Error: ', e )
    raise 


        # $host = 'sql863.main-hosting.eu';
        # $db_name = 'u484426513_databasereact';
        # $username = 'u484426513_databasereact';
        # $password = 'i:![VW:3S#';        

       #[0], [1],      [2]      ,[3]    
#SELECT id, nombre, descripcion, tiempo, usuario FROM curso WHERE 1
#SELECT id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario FROM estudiante WHERE 1         
#SELECT id, nombre FROM grupo WHERE 1
#SELECT id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, usuario, idcarreras FROM profesor WHERE 1
#SELECT id, name, email, password FROM user WHERE 1

#UPDATE curso SET nombre='[value-2]',descripcion='[value-3]',tiempo='[value-4]',usuario='[value-5]' WHERE id='[value-1]' 
#UPDATE estudiante SET cedula='[value-2]',correoelectronico='[value-3]',telefono='[value-4]',telefonocelular='[value-5]',fechanacimiento='[value-6]',sexo='[value-7]',direccion='[value-8]',nombre='[value-9]',apellidopaterno='[value-10]',apellidomaterno='[value-11]',nacionalidad='[value-12]',idCarreras='[value-13]',usuario='[value-14]' WHERE  id='[value-1]'
#UPDATE grupo SET nombre='[value-2]' WHERE id='[value-1]'
#UPDATE profesor SET cedula='[value-2]',correoelectronico='[value-3]',telefono='[value-4]',telefonocelular='[value-5]',fechanacimiento='[value-6]',sexo='[value-7]',direccion='[value-8]',nombre='[value-9]',apellidopaterno='[value-10]',apellidomaterno='[value-11]',nacionalidad='[value-12]',usuario='[value-13]',idcarreras='[value-14]' WHERE id='[value-1]'
#UPDATE user SET name='[value-2]',email='[value-3]',password='[value-4]' WHERE  id='[value-1]'


# INSERT INTO user(id, name, email, password) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')
# INSERT INTO profesor(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, usuario, idcarreras) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]','[value-12]','[value-13]','[value-14]')
# INSERT INTO grupo(id, nombre) VALUES ('[value-1]','[value-2]')
# INSERT INTO estudiante(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]','[value-12]','[value-13]','[value-14]')
# INSERT INTO curso(id, nombre, descripcion, tiempo, usuario) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')

# DELETE FROM `grupo` WHERE  id =
# DELETE FROM `estudiante` WHERE id =
# DELETE FROM `curso` WHERE id =
# DELETE FROM `profesor` WHERE id =
# DELETE FROM `user` WHERE id =


# Menu
#     1-Curso
#         a-Consultar datos general (Lista Grande)
#         b-Consultar dato individual por ejemplo database.getCursoById(399)
#         c-Actualizar un registro por medio del identificador o id
#         d-Crear un registro
#         e-Elimar un registro por ID
#     2-Estudiante
#         a-Consultar datos general (Lista Grande)
#         b-Consultar dato individual
#         c-Actualizar un registro por medio del identificador o id
#         d-Crear un registro
#         e-Elimar un registro por ID
#     3-Profesor
#         a-Consultar datos general (Lista Grande)
#         b-Consultar dato individual
#         c-Actualizar un registro por medio del identificador o id
#         d-Crear un registro
#         e-Elimar un registro por ID
#     4-Grupo
#         a-Consultar datos general (Lista Grande)
#         b-Consultar dato individual
#         c-Actualizar un registro por medio del identificador o id
#         d-Crear un registro
#         e-Elimar un registro por ID


# Estudiante, con base a los atributos que tiene el database se debe crear la interfaz que permita, realizar la inserción, modificación, eliminación y consulta de los datos.
# Profesor, con base a los atributos que tiene el database se debe crear la interfaz que permita, realizar la inserción, modificación, eliminación y consulta de los datos.
# Grupo, con base a los atributos que tiene el database se debe crear la interfaz que permita, realizar la inserción, modificación, eliminación y consulta de los datos.
# Curso, con base a los atributos que tiene el database se debe crear la interfaz que permita, realizar la inserción, modificación, eliminación y consulta de los datos.
