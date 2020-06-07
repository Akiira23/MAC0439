def main():
    print("ESTOU FUNCIONANDO!")
    fantasy_inserts = open(“../MER/FantasyStar_inserts.sql”, ”r”)
    for line in fantasy_inserts:
        print(line)

main()