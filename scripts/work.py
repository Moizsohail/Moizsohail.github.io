# %%
import os
import json
import glob

# %%

WORK = "..\\static\\work"
STORE = '../store/work.js'
JSON = 'info.json'
BASE = 'base.txt'

DROP = "..\\static"
# %%
PROJECTS = os.path.join(WORK, "*")
PROJECT_LIST = glob.glob(PROJECTS)


def JSON_LINK(x): return os.path.join(x, JSON)
def BASE_LINK(x): return os.path.join(x, BASE)


def parse(link):
    f = open(link, 'r').read().split('\n')
    f = list(filter(lambda x: len(x.strip()) > 0 and x[0] != "#", f))
    return [x.strip() for x in f]


def CAROUSEL_IMAGES(x):
    temp = glob.glob(os.path.join(x, 'image*.*'))
    return [x.replace(DROP, "..") for x in temp]
# %%


for x in PROJECT_LIST:
    data = {}
    data['img'] = CAROUSEL_IMAGES(x)
    temp = parse(BASE_LINK(x))
    data['title'] = temp[0]
    data['desc'] = temp[1]
    if len(temp) > 2:
        data['link'] = temp[2]
    if len(temp) > 3:
        data['color'] = temp[3]
    # -    data['title'] = os.path.basename(y)
    #     data['content'] = []
    #     for x in files:
    #         temp = {}
    #         temp['title'] = os.path.basename(x).split('.')[0].replace('_',' ')
    #         temp['link'] = fix_path(x.replace(PATH,LINK))
    #         temp['type'] = type_setter(x)
    #         data['content'] += [temp]
    #     return data

    # def parse(link):
    #     f = open(link,'r').read().split('\n')
    #     f = list(filter(lambda x: len(x.strip()) > 0 and x[0] != "#",f))
    #     return [x.strip() for x in f]

    # for x in glob.glob(COURSES):
    #     # files = glob.glob(os.path.join(x,'*'))
    #     data = {}
    #     info = parse(BASE_LINK(x))
    #     data['head'] = info[0]
    #     data['link'] = info[1]
    #     data['title'] = info[2]
    #     data['fullTitle'] = info[3]
    #     data['text'] = info[4]
    #     data['img'] = info[5]
    #     data['carousel'] = info[6:]

    #     modules = get_modules(x)

    #     data['modules'] = [module_setup(module) for module in modules]

    with open(JSON_LINK(x), 'w') as outfile:
        json.dump(data, outfile, indent=4)

    # %%


def fix_path(x):
    return x.replace('\\', '/')


def fix_imports(c):
    path = fix_path(os.path.join(c, 'info')).replace('..', '~')
    # module = os.path.basename(c).capitalize()
    return path


def import_string(imports, modules):
    final = ''
    for i in range(len(imports)):
        final += 'import {} from \'{}\'\n'.format(modules[i], imports[i])
    return final


def create_state(imports, modules):
    return ("""{}
export const state = () => ({{

    data: [{}],
}})""".format(imports, modules))

# create_state("HI","lol","aa")

# %%


imports = [fix_imports(c) for c in PROJECT_LIST]
modules = ['mod{}'.format(i) for i in range(len(imports))]
modules_list = ', '.join(modules)
state = create_state(import_string(imports, modules), modules_list)
with open(STORE, 'w') as f:
    f.write(state)
# %%

# %%
print("Done")

# %%
