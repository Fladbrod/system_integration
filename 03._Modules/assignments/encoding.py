txt = "This a string thåt should be encoded"

x = txt.encode(encoding="utf-8",errors="namereplace")

print(txt.encode(encoding="ascii",errors="namereplace"))

print(x)

print(x.decode(encoding="utf-8",errors="namereplace"))