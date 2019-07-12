# 改善 Python 程序的 91 个建议

建议1：理解Pythonic概念 1
建议2：编写Pythonic代码 5
建议3：理解Python与C语言的不同之处 8
建议4：在代码中适当添加注释 10
建议5：通过适当添加空行使代码布局更为优雅、合理 12
建议6：编写函数的4个原则 15
建议7：将常量集中到一个文件 18
第2章　编程惯用法 20
建议8：利用assert语句来发现问题 20
建议9：数据交换值的时候不推荐使用中间变量 22
建议10：充分利用Lazy evaluation的特性 24
建议11：理解枚举替代实现的缺陷 25
建议12：不推荐使用type来进行类型检查 27
建议13：尽量转换为浮点类型后再做除法 29
建议14：警惕eval()的安全漏洞 31
建议15：使用enumerate()获取序列迭代的索引和值 33
建议16：分清==与is的适用场景 35
建议17：考虑兼容性，尽可能使用Unicode 37
建议18：构建合理的包层次来管理module 42
第3章　基础语法 45
建议19：有节制地使用from...import语句 45
建议20：优先使用absolute import来导入模块 48
建议21：i+=1不等于++i 50
建议22：使用with自动关闭资源 50
建议23：使用else子句简化循环（异常处理） 53
建议24：遵循异常处理的几点基本原则 55
建议25：避免finally中可能发生的陷阱 59
建议26：深入理解None，正确判断对象是否为空 60
建议27：连接字符串应优先使用join而不是+ 62
建议28：格式化字符串时尽量使用.format方式而不是% 64
建议29：区别对待可变对象和不可变对象 68
建议30：[]、()和{}：一致的容器初始化形式 71
建议31：记住函数传参既不是传值也不是传引用 73
建议32：警惕默认参数潜在的问题 77
建议33：慎用变长参数 78
建议34：深入理解str()和repr()的区别 80
建议35：分清staticmethod和classmethod的适用场景 82
第4章　库 86
建议36：掌握字符串的基本用法 86
建议37：按需选择sort()或者sorted() 89
建议38：使用copy模块深拷贝对象 92
建议39：使用Counter进行计数统计 95
建议40：深入掌握ConfigParser 97
建议41：使用argparse处理命令行参数 99
建议42：使用pandas处理大型CSV文件 103
建议43：一般情况使用ElementTree解析XML 107
建议44：理解模块pickle优劣 111
建议45：序列化的另一个不错的选择——JSON 113
建议46：使用traceback获取栈信息 116
建议47：使用logging记录日志信息 119
建议48：使用threading模块编写多线程程序 122
建议49：使用Queue使多线程编程更安全 125
第5章　设计模式 129
建议50：利用模块实现单例模式 129
建议51：用mixin模式让程序更加灵活 132
建议52：用发布订阅模式实现松耦合 134
建议53：用状态模式美化代码 137
第6章　内部机制 141
建议54：理解built-in objects 141
建议55：__init__()不是构造方法 143
建议56：理解名字查找机制 147
建议57：为什么需要self参数 151
建议58：理解MRO与多继承 154
建议59：理解描述符机制 157
建议60：区别__getattr__()和__getattribute__()方法 160
建议61：使用更为安全的property 164
建议62：掌握metaclass 169
建议63：熟悉Python对象协议 176
建议64：利用操作符重载实现中缀语法 179
建议65：熟悉 Python 的迭代器协议 181
建议66：熟悉 Python 的生成器 185
建议67：基于生成器的协程及greenlet 188
建议68：理解GIL的局限性 192
建议69：对象的管理与垃圾回收 194
第7章　使用工具辅助项目开发 197
建议70：从PyPI安装包 197
建议71：使用pip和yolk安装、管理包 199
建议72：做paster创建包 202
建议73：理解单元测试概念 209
建议74：为包编写单元测试 212
建议75：利用测试驱动开发提高代码的可测性 216
建议76：使用Pylint检查代码风格 218
建议77：进行高效的代码审查 221
建议78：将包发布到PyPI 224
第8章　性能剖析与优化 227
建议79：了解代码优化的基本原则 227
建议80：借助性能优化工具 228
建议81：利用cProfile定位性能瓶颈 229
建议82：使用memory_profiler 和 objgraph 剖析内存使用 235
建议83：努力降低算法复杂度 237
建议84：掌握循环优化的基本技巧 238
建议85：使用生成器提高效率 240
建议86：使用不同的数据结构优化性能 243
建议87：充分利用set的优势 245
建议88：使用multiprocessing克服GIL的缺陷 248
建议89：使用线程池提高效率 254
建议90：使用C/C++模块扩展提高性能 257
建议91：使用 Cython 编写扩展模块 259

---

### 建议 2：编写 Pythonic 代码

推荐深入学习 Flask、gevent 和 requests。

`PEP8` 不是唯一的编程规范。有些公司制定的编程规范也非常有参考意义，比如 `Google Python Style Guide`。同样，`PEP8` 也不是唯一的风格检测程序，类似的应用还有 `Pychecker、Pylint、Pyflakes` 等。其中 `Pychecker` 是 `Google Python Style Guide` 推荐的工具；`Pylint` 因可以非常方便地通过编辑配置文件实现公司或团队的风格检测而受到许多人的青睐；`Pyflakes` 则因为易于集成到 vim 中，所以使用的人也非常多。

### 建议 4：在代码中适当添加注释

```
def FuncName(parameter1 , parameter2):
    """Describe what this function does.
    #such as "Find whether the special string is in the queue or not"
    Args:
        parameter1: parameter type, what is this parameter used for.
        	#such as strqueue:string,string queue list for search
        parameter2: parameter type, what is this parameter used for.
        	#such as str:string,string to find
    Returns:
    	return type, return value.
    		#such as  boolean,sepcial string  found return True,else return False
    """
	function body
	...
	...
```

推荐在头文件中包含 copyright 申明、模块描述等，如有必要，可以考虑加入作者信息以及变更记录。

对于不再需要的代码，应该将其删除，而不是将其注释掉。

### 建议 5：通过适当添加空行使代码布局更为优雅、合理

在一组代码表达完一个完整的思路之后，应该用空白行进行间隔

避免过长的代码行，每行最好不要超过80个字符

不要为了保持水平对齐而使用多余的空格

逗号和分号前不要使用空格

### 建议 6：编写函数的 4 个原则

函数能够带来**最大化的代码重用和最小化的代码冗余**。

1. 函数设计要尽量短小，嵌套层次不宜过深
2. 函数申明应该做到合理、简单、易于使用
3. 更好的方法是通过加入默认参数来避免这种退化，函数参数设计应该考虑向下兼容
4. 一个函数只做一件事，尽量保证函数语句粒度的一致性
5. 不要在函数中定义可变对象作为默认值，使用异常替换返回错误，保证通过单元测试等。
6. 应该尽量避免使用eval，在需要使用eval的地方可用安全性更好的ast.literal_eval替代

### 建议 7：将常量集中到一个文件

在 Python 中应当如何使用常量：

- 通过命名风格提醒使用者该变量代表常量，如常量名全部大写
- 通过自定义类实现常量功能：将存放常量的文件命名为constant.py，并在其中定义一系列常量

无论采用哪一种方式来实现常量，都提倡将常量集中到一个文件中，因为这样有利于维护，一旦需要修改常量的值，可以集中统一进行而不是逐个文件去检查

### 建议 8：利用 assert 语句来发现问题

◆ 建议8：利用assert语句来发现问题

> > 断言实际是被设计用来捕获用户所定义的约束的，而不是用来捕获程序本身错误的，因此使用断言需要注意以下几点：1）不要滥用，这是使用断言最基本的原则。

> > 如果Python本身的异常能够处理就不要再使用断言

> > 不要使用断言来检查用户的输入。如对于一个数字类型，如果根据用户的设计该值的范围应该是2～10，较好的做法是使用条件判断，并在不符合条件的时候输出错误提示信息。

> > 在函数调用后，当需要确认返回值是否合理时可以使用断言

◆ 建议9：数据交换值的时候不推荐使用中间变量

> > 一般情况下Python表达式的计算顺序是从左到右，但遇到表达式赋值的时候表达式右边的操作数先于左边的操作数计算

◆ 建议10：充分利用Lazy evaluation的特性

> > Lazy evaluation

> > 避免不必要的计算，带来性能上的提升。对于Python中的条件表达式if x and y，在x为false的情况下y表达式的值将不再计算。而对于if x or y，当x的值为true的时候将直接返回，不再计算y的值。因此编程中应该充分利用该特性。

> > 因此在编程过程中，如果对于or条件表达式应该将值为真可能性较高的变量写在or的前面，而and则应该推后。

◆ 建议12：不推荐使用type来进行类型检查

> > 不推荐使用type来进行变量类型检查”

> > 基于内建类型扩展的用户自定义类型，type函数并不能准确返回结果。

> > 如果类型有对应的工厂函数，可以使用工厂函数对类型做相应转换，如list(listing)、str(name)等，否则可以使用isinstance()函数来检测

◆ 建议14：警惕eval()的安全漏洞

> > Python中eval()函数将字符串str当成有效的表达式来求值并返回计算结果。

> > “eval is evil”（eval是邪恶的），这是一句广为人知的对eval的评价，它主要针对的是eval()的安全性。

> > 如果使用对象不是信任源

```python
>>> y = 2
>>> assert x == y, "not equals"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError: not equals
>>> x = 1
>>> y = 2
# 以上代码相当于
>>> if __debug__ and not x == y:
...     raise AssertionError("not equals")
... 
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
AssertionError: not equals
```

运行是加入-O参数可以禁用断言。

### 建议 9：数据交换的时候不推荐使用中间变量

```python
>>> Timer('temp = x; x = y; y = temp;', 'x = 2; y = 3').timeit()
0.059251302998745814
>>> Timer('x, y = y, x', 'x = 2; y = 3').timeit()
0.05007316499904846
```

对于表达式x, y = y, x，在内存中执行的顺序如下：

1. 先计算右边的表达式y, x，因此先在内存中创建元组(y, x)，其标识符和值分别为y, x及其对应的值，其中y和x是在初始化已经存在于内存中的对象
2. 计算表达式左边的值并进行赋值，元组被依次分配给左边的标识符，通过解压缩，元组第一标识符y分配给左边第一个元素x，元组第二标识符x分配给左边第一个元素y，从而达到交换的目的

下面是通过字节码的分析：

```python
>>> import dis
>>> def swap1():
...     x = 2
...     y = 3
...     x, y = y, x
... 
>>> def swap2():
...     x = 2
...     y = 3
...     temp = x
...     x = y
...     y = temp
... 
>>> dis.dis(swap1)
  2           0 LOAD_CONST               1 (2)
              3 STORE_FAST               0 (x)

  3           6 LOAD_CONST               2 (3)
              9 STORE_FAST               1 (y)

  4          12 LOAD_FAST                1 (y)
             15 LOAD_FAST                0 (x)
             18 ROT_TWO                             # 交换两个栈的最顶层元素
             19 STORE_FAST               0 (x)
             22 STORE_FAST               1 (y)
             25 LOAD_CONST               0 (None)
             28 RETURN_VALUE
>>> dis.dis(swap2)                                                                                                                                    
  2           0 LOAD_CONST               1 (2)
              3 STORE_FAST               0 (x)

  3           6 LOAD_CONST               2 (3)
              9 STORE_FAST               1 (y)

  4          12 LOAD_FAST                0 (x)
             15 STORE_FAST               2 (temp)

  5          18 LOAD_FAST                1 (y)
             21 STORE_FAST               0 (x)

  6          24 LOAD_FAST                2 (temp)
             27 STORE_FAST               1 (y)
             30 LOAD_CONST               0 (None)
             33 RETURN_VALUE
```

### 建议 10：充分利用 Lazy evaluation 的特性

```python
def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b
```

哈哈哈，我猜到肯定是生成器实现菲波拉契序列的例子，不过对比我写的版本，唉。。。

### 建议 11：理解枚举替代实现的缺陷

利用 Python 的动态特征，可以实现枚举：

```python
# 方式一
class Seasons:
    Spring, Summer, Autumn, Winter = range(4)
# 方式二
def enum(*posarg, **keysarg):
    return type("Enum", (object,), dict(zip(posarg, range(len(posarg))), **keysarg))
Seasons = enum("Spring", "Summer", "Autumn", Winter=1)
Seasons.Spring
# 方式三
>>> from collections import namedtuple
>>> Seasons = namedtuple('Seasons', 'Spring Summer Autumn Winter')._make(range(4))
>>> Seasons.Spring
0
# 但通过以上方式实现枚举都有不合理的地方
>>> Seasons._replace(Spring=2)                                             │
Seasons(Spring=2, Summer=1, Autumn=2, Winter=3)  
# Python3.4 中加入了枚举，仅在父类没有任何枚举成员的时候才允许继承
```

### 建议 12：不推荐使用 type 来进行类型检查

作为动态语言，Python 解释器会在运行时自动进行类型检查并根据需要进行隐式类型转换，当变量类型不同而两者之间又不能进行隐式类型转换时便抛出TypeError异常。

```python
>>> def add(a, b):
...     return a + b
... 
>>> add(1, 2j)
(1+2j)
>>> add('a', 'b')
'ab'
>>> add(1, 2)
3
>>> add(1.0, 2.3)
3.3
>>> add([1, 2], [3, 4])
[1, 2, 3, 4]
>>> add(1, 'a')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 2, in add
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

所以实际应用中，我们常常需要进行类型检查，但是不推荐使用type()，因为基于内建类型扩展的用户自定义类型，type()并不能准确返回结果：

```python
class UserInt(int):
    def __init__(self, val=0):
        self._val = int(val)
    def __add__(self, val):
        if isinstance(val, UserInt):
            return UserInt(self._val + val._val)
        return self._val + val
    def __iadd__(self, val):
        raise NotImplementedError("not support operation")
    def __str__(self):
        return str(self._val)
    def __repr__(self):
        return "Integer %s" % self._val
>>> n = UserInt()
>>> n
Integer 0
>>> print(n)
0
>>> m = UserInt(2)
>>> print(m)
2
>>> type(n) is int
False                   # 显然不合理
>>> isinstance(n, int)
True
```

我们可以使用isinstance来检查：isinstance(object, classinfo)

### 建议 13：尽量转换为浮点类型后再做除法

```python
# 计算平均成绩绩点
>>> gpa = ((4*96+3*85+5*98+2*70)*4) / ((4+3+5+2)*100)
>>> gpa
3.625714285714286   # 终于知道自己的绩点是咋算的了
```

### 建议 14：警惕 eval() 的安全漏洞

eval(expression[,  globals[, locals]])将字符串 str  当成有效的表达式来求值并返回计算结果，globas为字典形式，locals为任何映射对象，它们分别表示全局和局部命名空间，两者都省略表达式将在调用的环境中执行，为什么需要警惕eval()呢：

```python
# 合理正确地使用
>>> eval("1+1==2")
True
>>> eval('"a"+"b"')
'ab'
# 坏心眼的geek
>>> eval('__import__("os").system("dir")')
Desktop  Documents  Downloads  examples.desktop  Music  Pictures  Public  __pycache__  Templates  Videos
0
>>> eval('__import__("os").system("del * /Q")')     # 嘿嘿嘿
```

如果确实需要使用eval，建议使用安全性更好的ast.literal_eval。







### 建议 15：使用 enumerate() 获取序列迭代的索引和值

```python
>>> li = ['a', 'b', 'c', 'd', 'e']
>>> for i, e in enumerate(li):
...     print('index: ', i, 'element: ', e)
... 
index:  0 element:  a
index:  1 element:  b
index:  2 element:  c
index:  3 element:  d
index:  4 element:  e
# enumerate(squence, start=0) 内部实现
def enumerate(squence, start=0):
    n = start
    for elem in sequence:
        yield n, elem   # 666
        n += 1
# 明白了原理我们自己也来实现一个反序的
def reversed_enumerate(squence):
    n = -1
    for elem in reversed(sequence):
        yield len(sequence) + n, elem
        n -= 1
```

### 建议 16：分清 == 与 is 的适用场景

操作符意义isobject identity==equal

is的作用是用来检查对象的标示符是否一致，也就是比较两个对象在内存中是否拥有同一块内存空间，相当于id(x)  ==  id(y)，它并不适用于判断两个字符串是否相等。==才是用来判断两个对象的值是否相等，实际是调用了内部的__eq__，所以a==b相当于a.__eq__(b)，也就是说==是可以被重载的，而is不能被重载。

```python
>>> s1 = 'hello world'
>>> s2 = 'hello world'
>>> s1 == s2
True
>>> s1 is s2
False
>>> s1.__eq__(s2)
True
>>> a = 'Hi'
>>> b = 'Hi'
>>> a == b
True
>>> a is b
True
```

咦~怎么上例中的a, b又是“同一对象”了？这跟 Python 的 string interning 机制有关，为了提高系统性能，对于**较小的字符串**会保留其值的一个副本，当创建新的字符串时直接指向该副本，所以a和b的 id 值是一样的，同样对于小整数[-5, 257)也是如此：

```python
>>> id(a)
140709793837832
>>> id(b)
140709793837832
>>> x = -5
>>> y = -5
>>> x is y
True
>>> id(x) == id(y)
True
```

### 建议 17：考虑兼容性，尽可能使用 Unicode

我之前也总结过编码的问题。由于最早的编码是 ASCII 码，只能表示 128 个字符，显然这对其它语言编码并不适用，Unicode就是为了不同的文字分配一套统一的编码。

### 建议 18：构建合理的包层次来管理 module

本质上每一个 Python 文件都是一个模块，使用模块可以增强代码的可维护性和可重用性，在较大的项目中，我们需要合理地组织项目层次来管理模块，这就是包(Package)的作用。

一句话说包：一个包含__init__.py   文件的目录。包中的模块可以通过.进行访问，即包名.模块名。那么这个__init__.py文件有什么用呢？最明显的作用就是它区分了包和普通目录，在该文件中申明模块级别的  import 语句从而变成了包级别可见，另外在该文件中定义__all__变量，可以控制需要导入的子包或模块。

这里给出一个较为合理的包组织方式，是[FlaskWeb 开发：基于Python的Web应用开发实战](https://link.zhihu.com/?target=https%3A//item.jd.com/11594082.html)一书中推荐而来的：

```python
|-flasky
    |-app/                      # Flask 程序
        |-templates/            # 存放模板
        |-static/               # 静态文件资源
        |-main/
            |-__init__.py
            |-errors.py         # 蓝本中的错误处理程序
            |-forms.py          # 表单对象
            |-views.py          # 蓝本中定义的程序路由
        |-__init__.py
        |-email.py              # 电子邮件支持
        |-models.py             # 数据库模型
    |-migrations/               # 数据库迁移脚本
    |-tests/                    # 单元测试
        |-__init__.py
        |-test*.py
    |-venv/                     # 虚拟环境
    |-requirements/
        |-dev.txt               # 开发过程中的依赖包
        |-prod.txt              # 生产过程中的依赖包
    |-config.py                 # 储存程序配置
    |-manage.py                 # 启动程序以及其他的程序任务
```

## 第 3 章：基础语法

### 建议 19：有节制地使用 from...import 语句

Python 提供三种方式来引入外部模块：import语句、from...import语句以及__import__函数，其中__import__函数显式地将模块的名称作为字符串传递并赋值给命名空间的变量。

使用import需要注意以下几点：

- 优先使用import a的形式
- 有节制地使用from a import A
- 尽量避免使用from a import *

为什么呢？我们来看看  Python 的 import 机制，Python  在初始化运行环境的时候会预先加载一批内建模块到内存中，同时将相关信息存放在sys.modules中，我们可以通过sys.modules.items()查看预加载的模块信息，当加载一个模块时，解释器实际上完成了如下动作：

1. 在sys.modules中搜索该模块是否存在，如果存在就导入到当前局部命名空间，如果不存在就为其创建一个字典对象，插入到sys.modules中
2. 加载前确认是否需要对模块对应的文件进行编译，如果需要则先进行编译
3. 执行动态加载，在当前命名空间中执行编译后的字节码，并将其中所有的对象放入模块对应的字典中

```python
>>> dir()
['__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__']
>>> import test
testing module import
>>> dir()
['__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'test']
>>> import sys
>>> 'test' in sys.modules.keys()
True
>>> id(test)
140367239464744
>>> id(sys.modules['test'])
140367239464744
>>> dir(test)
['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b']
>>> sys.modules['test'].__dict__.keys()
dict_keys(['__file__', '__builtins__', '__doc__', '__loader__', '__package__', '__spec__', '__name__', 'b', 'a', '__cached__'])
```

从上可以看出，对于用户自定义的模块，import 机制会创建一个新的 module 将其加入当前的局部命名空间中，同时在 sys.modules 也加入该模块的信息，但本质上是在引用同一个对象，通过test.py所在的目录会多一个字节码文件。

### 建议 20：优先使用 absolute import 来导入模块

### 建议 21： i+=1 不等于 ++i

首先++i或--i在 Python 语法上是合法，但并不是我们通常理解的自增或自减操作：

```python
>>> ++1     # +(+1)
1
>>> --1     # -(-1)
1
>>> +++2
2
>>> ---2
-2
```

原来+或-只表示正负数符号。

### 建议 22：使用 with 自动关闭资源

对于打开的资源我们记得关闭它，如文件、数据库连接等，Python 提供了一种简单优雅的解决方案：with。

先来看with实现的原理吧。

with的实现得益于一个称为上下文管理器(context   manager)的东西，它定义程序运行时需要建立的上下文，处理程序的进入和退出，实现了上下文管理协议，即对象中定义了__enter__()和__exit__()，任何实现了上下文协议的对象都可以称为一个上下文管理器：

- __enter__()：返回运行时上下文相关的对象
- __exit__(exception_type, exception_value, traceback)：退出运行时的上下文，处理异常、清理现场等

包含with语句的代码块执行过程如下：

```python
with 表达式 [as 目标]:
    代码块
# 例
>>> with open('test.txt', 'w') as f:
...     f.write('test')
... 
4
>>> f.__enter__
<built-in method __enter__ of _io.TextIOWrapper object at 0x7f1b967aaa68>
>>> f.__exit__
<built-in method __exit__ of _io.TextIOWrapper object at 0x7f1b967aaa68>
```

1. 计算表达式的值，返回一个上下文管理器对象
2. 加载上下文管理器对象的__exit__()以备后用
3. 调用上下文管理器对象的__enter__()
4. 将__enter__()的返回值赋给目标对象
5. 执行代码块，正常结束调用__exit__()，其返回值直接忽略，如果发生异常，会调用__exit__()并将异常类型、值及  traceback 作为参数传递给__exit__()，__exit__()返回值为 false 异常将会重新抛出，返回值为 true  异常将被挂起，程序继续执行

于此，我们可以自定义一个上下文管理器：

```python
>>> class MyContextManager(object):
...     def __enter__(self):
...         print('entering...')
...     def __exit__(self, exception_type, exception_value, traceback):
...         print('leaving...')
...         if exception_type is None:
...             print('no exceptions!')
...             return False
...         elif exception_type is ValueError:
...             print('value error!')
...             return True
...         else:
...             print('other error')
...             return True
... 
>>> with MyContextManager():
...     print('Testing...')
... 
entering...
Testing...
leaving...
no exceptions!
>>> with MyContextManager():
...     print('Testing...')
...     raise(ValueError)
... 
entering...
Testing...
leaving...
value error!
```

Python 还提供contextlib模块，通过 Generator 实现，其中的 contextmanager 作为装饰器来提供一种针对函数级别上的上下文管理器，可以直接作用于函数/对象而不必关心__enter__()和__exit__()的实现。

推荐[文章](https://link.zhihu.com/?target=http%3A//www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001478651770626de401ff1c0d94f379774cabd842222ff000)

### 建议 23：使用 else 子句简化循环（异常处理）

Python 的 else 子句提供了隐含的对循环是否由 break 语句引发循环结束的判断，有点绕哈，来看例子：

```python
>>> def print_prime(n):
...     for i in range(2, n):
...         for j in range(2, i):
...             if i % j == 0:
...                 break
...         else:
...             print('{} is a prime number'.format(i))
... 
>>> print_prime(7)
2 is a prime number
3 is a prime number
5 is a prime number
```

可以看出，else 子句在循环正常结束和循环条件不成立时被执行，由 break 语句中断时不执行，同样，我们可以利用这颗语法糖作用在 while 和 try...except 中。

> 