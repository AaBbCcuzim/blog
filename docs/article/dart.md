# Dart

## 变量

**dart 是一个强大的脚本类语言，可以不预先定义变量类型，自动会类型推断**

**dart 中定义的变量可以通过** `var`关键字，也可以通过类型来声明变量

## 常量

- `final`和 `const`修饰符
- `const`值不变，一开始就得赋值
- `final`可以开始不赋值，只能赋值一次；而 `final`不仅有 `const`编译时常量的特性，最重要的是它是运行时常量，并且 `final`是惰性初始化，即在运行时第一次使用前才初始化

## 数据类型

### 字符串类型

#### 字符串定义的几种方式

```
var str = ‘abc’;
String str = 'abc';
String str = '''
abc
abc
''';
String str = """
    abc
abc
""";
```

#### 字符串的拼接

```
String str1 = 'hello';
String str2 = 'Dart';

print("$str1 $str2");
print(str1 + " " + str2);
```

### 数值类型

#### int

```
int a = 1;
```

#### double

```
double b = 1.0;
```

### 布尔类型

#### bool

```
bool flag = true;
```

### 数据类型

#### List

```
var l = ["a",1,true];

print(l.length);
print(l[0]);

var l1 = <int>[1,2,3];

var l2 = [];
l2.add(1);

var l3 = new List(); //新版本无法使用
var l4 = List.filled(length, fill); //无法增加数据，无法修改长度
```

#### Maps

```
var person = {
"name": "Tom",
    "age": 20,
};

print(person);
print(person["name"]);

var p = new Map();
p["name"] = "Tom";
```

### 判断类型

#### is

```
var str = "abc";
print(str is String);
```

## 运算符

### 算术运算符

```
a+b // 加
a-b // 减
a*b // 乘
a/b // 除
a%b // 取余
a~/b // 取整
```

### 关系运算符

```
a==b // 等于
a!=b // 不等
a>b // 大于
a<b // 小于
a>=b // 大于等于
a<=b // 小于等于
```

### 逻辑运算符

```
! // 取反
&& // and
|| // or
```

### 赋值运算符

```
a = 1
a ??= 1 // 表示a为空的话把1赋值给a
a += 1
a -= 1
a *= 1
a /= 1
a %= 1
a ~/= 1
```

### 条件运算符

```
if(){
    
}else{

}

switch(){
    case "":
        
       break;
    defalut:
        
       break;
}

a = flag ? 1 : 0; // 三目运算符

b = a ?? 10 // a为空b为1，a不为空b为a
```

### 类型转换

```
toString() // num -> string
int.parse() // int -> string
double.parse() // double -> string
    
str.isEmpty // 判断字符串是否为空
a.isNaN
```

## 循环结构

```
for(int i=1;i<=10;i++){
    
}

while(){

}

do{

}while();

break;

continue;
```

## List

### 属性

| **属性**       | **含义**       |
| -------------- | -------------- |
| **length**     | **长度**       |
| **reversed**   | **含义**       |
| **isEmpty**    | **是否为空**   |
| **isNotEmpty** | **是否不为空** |

### 方法

| **方法**                       | **含义**                                        |
| ------------------------------ | ----------------------------------------------- |
| **add()**                      | **增加**                                        |
| **addAll()**                   | **拼接数组**                                    |
| **indexOf()**                  | **查找 传入具体值**                             |
| **remove()**                   | **删除 传入具体值**                             |
| **removeAt()**                 | **删除 传入具体值索引**                         |
| **fillRange(start,end,value)** | **修改**                                        |
| **insert(index,value)**        | **指定位置插入**                                |
| **insertAll(index,list)**      | **指定位置插入 List**                           |
| **toList()**                   | **其他类型转换成 List**                         |
| **join()**                     | **List 转换成字符串**                           |
| **spilt()**                    | **字符串转换成 List**                           |
| **forEach()**                  | **（ Set,Map 类似）**                           |
| **map()**                      | **修改 List （ Set,Map 类似）**                 |
| **where()**                    | **过滤 List（ Set,Map 类似）**                  |
| **any**                        | **判断集合内容（有一个即可）（ Set,Map 类似）** |
| **every**                      | **判断集合内容（需全部满足）（ Set,Map 类似）** |

## Set

**Set 是没有顺序且不能重复的集合，所以不能通过索引去获取值**

```
//去重
List a = [1,1,2];
var b = new Set();
b.addAll(a);
var c = b.toList();
```

## Map

### 属性

| **属性**       | **含义**                |
| -------------- | ----------------------- |
| **keys**       | **获取所有的 key 值**   |
| **values**     | **获取所有的 value 值** |
| **isEmpty**    | **是否为空**            |
| **isNotEmpty** | **是否不为空**          |

### 方法

| **方法**            | **含义**               |
| ------------------- | ---------------------- |
| **addAll()**        | **增加**               |
| **remove(key)**     | **删除**               |
| **containsValue()** | **查看是否有某映射值** |

## 函数

```
int f();
String f();
void f();

// 可选参数
void f(int a,[int b]){ // []内为可选参数

}
    
// 默认参数
void f(int a,[int b=1]){
    
}

// 命名参数
void f(int a,{int b}){

}

f(1,b:2);

// 箭头函数
list.foreach((value){
print();
})

list.foreach((value)=>print());

// 匿名函数
var f = (){

}

// 自执行方法
((){
    
})();

//闭包
fn(){
    var a = 123;
    return(){
        a++;
        print(a);
    }
}

var b = fn();
b();
b();
```

## 类

**Dart 是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是 Object 的子类**

### 类的创建和使用

```
class Person{
    String name = "Tom";
    int age = 23;
    void getInfo(){
print("$name-$age");
        print("$this.name");
    }
}

void main(){
Person p = new Person();
    print(p.name);
}
```

### 类的默认构造函数

```
class Person{
    String name;
    int age;
    
Person(String name,int age){
this.name = name;
        this.age = age;
    }
    // 简写
    // Person(this.name,this.age);
}
```

### 类的命名构造函数

```
class Person{
    String name;
    int age;
    
Person.new(){
        //
    }
}

Person p = Person.new();
```

### 类的私有方法和私有属性

**Dart 和其他面向对象语言不一样，Dart 中没有** ` public``private``protected `这些访问修饰符，但可以使用 `_`把一个属性或者方法定义成私有

```
class Animal{
String _name;
    void _run(){

    }
}
```

### 类中的 getter 和 setter 修饰符

```
class Rect{
int height;
    int width;
    get area{
        return this.height * this.width;
    }
    set areaH(value){
        this.height = value;
    }
}

Rect r = new Rect();
print(r.area);
r.areaH = 1;
```

### 类中的初始化列表

```
class Rect{
int height;
    int width;
    Rect():height=1,width=2{
        
    }
}
```

### 类中的静态成员

- **使用** `static`关键字来实现类级别的变量和函数
- **静态方法不能访问非静态成员，非静态方法可以访问静态成员**

```
class Person{
static String name = '张三';
    static void show(){

    }
}

main(){
print(Person.name);
    Person.show();
}
```

### 类与对象操作符

```
class Person{
String name;
    int age;
    Person(this.name,this.age);
    void printInfo(){

    }
}

main(){
    // 条件运算
    Person p;
    p?.printInfo(); // 不会报错
    
    // 类型判断
    print(p is Person);
    
    // 类型转换
    var p1;
    p1 = '';
    (p1 as Person).printInfo();
    
    // 级联操作
    p..name="李四"
     ..age=30
     ..printInfo();
}
```

### 类的继承

- **子类使用** `extends`关键词来继承父类
- **子类会继承父类里面可见的属性和方法，但是不会继承构造函数**
- **子类能覆写父类的方法（建议加上** `@override`注解）

```
class Person{
String name;
    int age;
    Person(this.name,this.age);
    Person.new(this.name,this.age);
    void printInfo(){

    }
    run(){

    }
}

class Web extends Person {
    Web(String name, num age):super(name,age){

    }
    
    //Web(String name, num age):super.new(name,age){
//
    //}
    
    run(){
        super.work(); // 子类调用父类的方法
    }  
}
```

### 抽象类

- **Dart 抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口**
  - **抽象类通过** `abstract`关键字来定义
  - **Dart 中的抽象方法不能用 abstract 声明，Dart 中没有方法体的方法我们称为抽象方法**
  - **如果子类继承抽象类必须得实现里面的抽象方法**
  - **如果抽象类当作接口实现的话必须得实现抽象类里面定义的所有属性和方法**
  - **抽象类不能被实例化，只有继承它的子类可以**
- `extends`抽象类和 `implements`的区别
  - **如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用 extends 继承抽象类**
  - **如果只是把抽象类当作标准的话我们就用 implements 实现抽象类**

```
abstract class Animal{
    eat(); // 抽象方法
}

class Dog extends Animal{
    @override
    eat(){
print('');
    }
    printInfo(){
print('');
    }
}
```

### 多态

- **允许将子类类型的指针赋值给父类类型的指针，同一个函数调用会有不同的执行效果**
- **子类的实例赋值给父类的引用**
- **多态就是父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现**

```
Animal dog = new Dog();
Animal cat = new Cat();
```

### 接口

- **dart 的接口没有 interface 关键字定义接口，而是普通类或抽象类都可以作为接口被实现**
- **但是 dart 的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部都要覆写一遍**
- **而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像 Java 接口那样的方式，一般会使用抽象类**
- **建议使用抽象类定义接口**

```
abstract class DB{
add();
    save();
    delete();
}

class Mysql implements DB{
@overrride
    ...
}

class Mssql implements DB{
@overrride
    ...
}
```

### 一个类实现多个接口

```
abstract class A {
  printA();
}

abstract class B {
  printB();
}

class C implements A, B {
  @override
  printA() {
    print('A');
  }

  @override
  printB() {
    print('B');
  }
}
```

### mixins

- **作为 mixins 的类只能继承自 Object，不能继承其他类**
- **作为 mixins 的类不能有构造函数**
- **一个类可以 mixins 多个 mixins 类**
- **mixins 绝不是继承，也不是接口，而是一种全新的特性**

```
class A{
void printA(){

    }
}

class B{
    void printB(){
        
    }
}

class C with A,B{
    
}
```

## 泛型

### 泛型方法

```
T getData<T>(T value){
return value;
}

main(){
    getData<int>(21);
}
```

### 泛型类

```
class myList<T> {
    List list = <T>[];
    void add(T value){
        this.list.add（value);
    }
}

main(){
    MyList l = new MyList<String>();
}
```

### 泛型接口

```
abstract class Cache<T>{
void setByKey(Strin key,T value);
}

class FileCache<T> implements Cache<T>{
@override
    void setBykey(Strin key,T value){

    }
}
```

## 库

- **自定义库**
  ```
  import 'x/x.dart'
  ```
- **系统内置库**
  ```
  import 'dart:math';
  import 'dart:io';
  import 'dart:convert';
  ```
- **Pub 包管理系统中的库**
  [https://pub.dev/packages](https://pub.dev/packages)
  [https://pub.flutter-io.cn/packages](https://pub.flutter-io.cn/packages)
  [https://pub.dartlang.org/fluter/](https://pub.dartlang.org/fluter/)
  - **需要在自己项目根目录新建一个** `pubspec.yaml`
  - **在** `pubspec.yaml`文件中配置名称、描述、依赖等信息
  - **然后运行** `pub get`获取包下载到本地
  - **项目中引入库** `import 'package:http.dart' as http;`

### 部分引入

```
import 'x/x.dart' show getAge; // 只有getAge能使用
import 'x/x.dart' hide getName; // 只有getAge无法使用
```

### 延迟加载

- **也称为懒加载，可以在需要的时候再进行加载，可以减少 APP 的启动时间**
- **懒加载使用 deferred as 关键字来指定，如下**
  ```
  import 'package:deferred/hello.dart' deferred as hello;
  ```
- **当需要使用的时候，需要使用** `loadLibrary()`方法来加载
  ```
  greet() async{
  await hello.loadLibrary();
  }
  ```

## Null safety 以及可空类型

```
int a = 1;
a = null; // 不被允许

int? a = 1;
a = null; // 允许

String? get(){
reutrn null;
}

String? str = 'is';
str = null;
print(str!.length); // ! 类型断言：如果str不等于null会打印str的长度，如果等于null会抛出异常
```

## late

**延迟初始化**

```
class Person{
    late String name;
    late int age;
    
    void setName(String name){
        this.name = name;
    }
}
```

## required

**用于允许根据需要标记任何命名参数（函数或类），使得他们不为空，因为可选参数中必须有个 required**

```
String printUserInfo(String username, {required int age,required String sex}){
...
}

main(){
printUserInfo('Tom',age: 20,sex: '男');
}
```

## identical

**检查两个引用是否指向同一个对象**

```
var o1 = Object();
var o2 = Object();
print(identical(o1,o2)); // false
print(identical(o1,o1)); // true

var o1 = const Object();
var o2 = const Object();
print(identical(o1,o2)); // true
print(identical(o1,o1)); // true
// const关键字在多个地方创建相同的对象的时候，内存中只保留了一个对象
```

## 常量构造函数

- **常量构造函数需以 const 关键字修饰**
- **const 构造函数必须用于成员变量都是 final 的类**
- **如果实例化时不加 const 修饰符，即使调用的是常量构造函数，实例化的对象也不是常量实体**
- **实例化常量构造函数的时候，多个地方创建这个对象，如果传入的值相同，只会保留一个对象**
- **Flutter 中 const 修饰不仅仅是节省组件构建时的内存开销，Fluter 在需要重新构组件**

```
class Container{
    final int width;
    final int height;
    const Container({required this.width,required this.height});
}

main(){
    var c1 = const Container(width:100,height:100);
    var c2 = const Container(width:100,height:100);
    print(identical(c1,c2)); // true
}
```
