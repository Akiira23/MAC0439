def main():
    file = open("usuarios.txt", "r")
    for line in file:
        splited_line = line.split("/")
        print("CREATE (user_%s:User {id:%s, nome:'%s', email:'%s'})" %(splited_line[0], splited_line[0], splited_line[1], splited_line[2]))
main()