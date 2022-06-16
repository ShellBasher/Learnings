import random
import hashlib
import shelve 

# === Method 1 : Take Input name, Hash it, return Decimal ===

def hash_name(name):
    
    hasher = hashlib.sha256(name.encode('utf-8'))
    hex_dig = hasher.hexdigest()
    hashed_name = str(int(hasher.hexdigest(), 16))[-5:] # get the last 10 rather than first 10 or else the first digit could only be 1-9
    
    return hashed_name

# === Method 2 : Use a Random Persistent "Seed" and the WichmannHill Algorithm ===

def pseudo_randint():
  
    shelf = shelve.open("seed")
    s1 = shelf['key1']
    s2 = shelf['key2']
    s3 = shelf['key3']
    
    if s1 or s2 or s3 is None:
        S1 = random.randint(1, 30000)
        S2 = random.randint(1, 30000)
        S3 = random.randint(1, 30000)
        
    else:
        s1 = (171 * s1) % 30269
        s2 = (172 * s2) % 30307
        s3 = (170 * s3) % 30323
    
    shelf = shelve.open("seed")
    shelf['key1'] = s1
    shelf['key2'] = s2
    shelf['key3'] = s3
    shelf.close()
    
    pr_int = (s1/30269.0 + s2/30307.0 + s3/30323.0) % 1
    pr_int = pr_int * 100000
    
    return int(pr_int)