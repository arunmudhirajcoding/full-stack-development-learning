def outer():
    name = "arun"
    def inner():
        print(name)
    return inner

inner1=outer()
inner1()