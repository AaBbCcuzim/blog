# Flutter

**Flutter 是谷歌公司开发的一款开源、免费的 U 框架，可以让我们快速的在 Android 和 iOS 上构建高质量 App。它最大的特点就是跨平台、以及高性能。目前 Flutter 已经支持 iOS、Android、Web、Windows、nacOS、Linux 等。**

## vscode 开发 flutter

`flutter run -d all`运行项目

**r 键**：热加载项目

**R 键**：热重启项目

**p 键**：显示网格，掌握布局

**o 键**：切换 android 和 ios 的预览模式

**q 键**：退出调试预览模式

## MaterialApp

**materialApp 是一个方便的 Widget，它封装了应用程序实现 Material Design 所需要的一些 Widget。一般作为顶层 widget 使用。**

**常用的属性**

- **home（主页）**
- **title（标题）**
- **color（颜色）**
- **theme（主题）**
- **routes（路由）**

## Scaffold

**Scaffold 是 Material Design 布局结构的基本实现，此类提供了用于显示 drawer、snackbar 和底部 sheet 的 API**

**常用的属性**

- **appBar 显示在界面顶部的一个 AppBar**
- **body 当前页面所显示的主要内容 Widget**
- **drawer 抽屉菜单控件**

## Flutter 把内容单独抽离成一个组件

**在 Flutter 中自定义组件其实就是一个类，这个类需要继承 StatelessWidget/StatefulWidget**

`StatelessWidget`是无状态组件，状态不可变的 widget

`StatefulWidget`是有状态组件，持有的状态可能在 widget 生命周期改变

```
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
    );
  }
}
```

## Container

### alignment

`Alignment.topCenter`：顶部居中对齐

`Alignment.topLeft`：顶部左对齐

`Alignment.topRight`：顶部右对齐

`Alignment.center`：水平垂直居中对齐

`Alignment.centerLeft`：垂直居中水平居左对齐

`Alignment.centerRight`：垂直居中水平居右对齐

`Alignment.bottomCenter`：底部居中对齐

`Alignment.bottomLeft`：底部居左对齐

`Alignment.bottomRight`：底部居右对齐

### decoration

`BoxDecoration`

```
decoration: BoxDecoration(
            color: Colors.red, // 背景颜色
            border: Border.all( // 边框
                color: Colors.blue,
                width: 2
            ),
   borderRadius: BorderRadius.circular(100), // 圆角
     boxShadow: const [ // 阴影
                BoxShadow(
                    color: Colors.grey,
                    blurRadius: 10
                )
            ],
    gradient: const LinearGradient( // 背景渐变
              colors: [Colors.red, Colors.blue],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight
            ),
),
```

### margin

**margin 属性是表示 Container 与外部其他组件的距离**

### padding

**padding 就是 Container 的内边距，指 Container 边缘与 Child 之间的距离**

### transform

**让 Container 进行一些变化**

```
transform: Matrix4.translationValues(-40,0,0) //位移
```

### height

**容器高度**

### width

**容器宽度**

### child

**容器子元素**

### image

**背景图片**

```
image:DecorationImage(
image:const NetworkImage("url"),
    fit:BoxFit.cover
)
```

## Text

### textAlign

**文本对齐方式**

`TextAlign.center`：居中

`TextAlign.left`：左对齐

`TextAlign.right`：右对齐

`TextAlign.justify`：两端对齐

### textDirection

**文本方向**

`ltr`：从左至右

`rtl`：从右至左

### overflow

**文字超出屏幕之后的处理方式**

`clip`：裁剪

`fade`：渐隐

`ellipsis`：省略号

### textScaleFactor

**字体显示倍率**

### maxLines

**文字显示最大行数**

### style

**字体的样式设置**

```
 style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w900,
                color: Colors.red,
                fontStyle: FontStyle.italic,
                letterSpacing: 6,
                decoration: TextDecoration.underline,
                decorationColor: Colors.black,
                decorationStyle: TextDecorationStyle.dashed
 )
```

## Image

**Flutter 中，我们可以通过 Image 组件来加载并显示图片 Image 的数据源可以是 asset、文件、内存以及网络**

`Image.asset` 本地图片

`Image.network` 远程图片

> **本地图片**
>
> 1. **先在项目根目录建立一个** `images`文件夹, 存放本地图片
> 2. **在** `pubspec.yaml`中配置（注意缩进格式）
>
>    ```
>    assets:
>      - images/a_dot_burr.jpeg
>      - images/a_dot_ham.jpeg
>
>      - images/ 相对路径
>    ```

### alignment

**图片的对齐方式**

### fit

**控制图片的拉伸和压缩**

`Boxfit.fill` 全图显示，图片会被拉伸，并充满父容器

`Boxfit.contain` 全图显示，显示原比例，可能会有空隙

`Boxfit.cover` 显示可能拉伸，可能裁切，充满（不变形）

`Boxfit.fitWidth` 宽度充满（横向充满）显示可能拉伸，可能裁切

`Boxfit.fitHeight` 高度充满（竖向充满）显示可能拉伸，可能裁切

`Boxfit.scaleDown` 效果跟 contain 差不多，但是此属性不允许显示超过原图片大小，可小不可大

### repeat

**平铺**

`ImageRepeat.repeat`：横向和纵向都进行重复，知道铺满整个画布

`ImageRepeat.repeatX`：横向重复，纵向不重复

`ImageRepeat.repeatY`：纵向重复，横向不重复

### width

**宽度**

### height

**高度**

## CilpOval

**实现圆角图片**

```
ClipOval(
 child: Image.network(
        "https://pic.kuaizhan.com/g3/f9/ca/cde4-1b7c-4514-926e-15667915898555",
        width: 150,
        height: 150,
        fit: BoxFit.cover,
      ),
)
```

## Icon

### Flutter 官方 icon 图标

**Material Design 所有图标可以在其官网查看：**[https://material.io/tools/icons/](https://material.io/tools/icons/)

```
Icon(
    Icons.abc,
    color: Colors.blue,
    size: 40,
)
```

### 自定义图标

**官方图标足够，此处暂时省略**

## ListView

**列表布局是项目开发中最常用的一种布局方式。Flutter 中我们可以通过 ListView 来定义列表项，支持垂直和水平方向展示。通过一个属性就可以控制列表的显示方向。**

**列表组件参数**

| **名称**            | **类型**               | **说明**         |
| ------------------- | ---------------------- | ---------------- |
| **scrollDirection** | **Axis**               | **列表方向**     |
| **padding**         | **EdgeinsetsGeometry** | **内边距**       |
| **resolve**         | **bool**               | **组件反序排列** |
| **children**        | **List**               | **列表元素**     |

```
ListView(
    children: const [
        ListTile(
            leading: Icon(Icons.home),
            title: Text("list item"),
            trailing: Icon(Icons.chevron_right_sharp),
        ),
        Divider(),
        ListTile(
            leading: Icon(Icons.assessment),
            title: Text("list item"),
            trailing: Icon(Icons.chevron_right_sharp),
        ),
    ],
))
```

**动态列表**

```
// for
class MyList extends StatelessWidget {
  const MyList({super.key});

  List<Widget> _getData() {
    List<Widget> list = [];
    for (var i = 0; i < 20; i++) {
      list.add(ListTile(
        title: Text("我是$i列表"),
      ));
    }
    return list;
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: _getData(),
    );
  }
}

// ListView.builder
class MyList extends StatelessWidget {
  List<String> items = [];
  MyList({super.key}) {
    items = List<String>.generate(1000, (index) => "Item $index");
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: items.length,
        itemBuilder: (context, index) => ListTile(
              title: Text(items[index]),
            ));
  }
}
```

## GridView

**Gridview 网格布局在实际项目中用的也是非常多的，当我们想让可以滚动的元素使用短阵方式排列的时候。此时我们可以用网格列表组件 Gridview 实现布局。**

**常用属性**

| **名称**               | **类型**                                                                                     | **说明**                                   |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **scrollDirection**    | **Axis**                                                                                     | **滚动方法**                               |
| **padding**            | **EdgeInsetsGeometry**                                                                       | **内边距**                                 |
| **resolve**            | **bool**                                                                                     | **组件反向排序**                           |
| **crossAxisSpacing**   | **double**                                                                                   | **水瓶子 Widget 之间间距**                 |
| **mainAxisSpacing**    | **double**                                                                                   | **垂直子 Widget 之间间距**                 |
| **crossAxisCount**     | **int 用在 GridView.count**                                                                  | **一行的 Widget 数量**                     |
| **maxCrossAxisExtent** | **double 用在 GridView.extent**                                                              | **横轴子元素的最大长度**                   |
| **childAspectRatio**   | **double**                                                                                   | **子 Widget 宽高比例**                     |
| **children**           |                                                                                              | **[]**                                     |
| **gridDelegate**       | **SliverGridDelegateWithFixedCrossAxisCount** **SliverGridDelegateWithFixedCrossAxisExtent** | **控制布局主要用在 GridView.builder 里面** |

### GirdView.count

```
class MyGrid extends StatelessWidget {
  const MyGrid({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 4,
      children: const [
        Icon(Icons.ac_unit),
        Icon(Icons.airport_shuttle),
        Icon(Icons.all_inclusive),
        Icon(Icons.beach_access),
        Icon(Icons.cake),
        Icon(Icons.free_breakfast)
      ],
    );
  }
}
```

### GirdView.extent

```
class MyGrid extends StatelessWidget {
  const MyGrid({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.extent(
      maxCrossAxisExtent: 40,
      children: const [
        Icon(Icons.ac_unit),
        Icon(Icons.airport_shuttle),
        Icon(Icons.all_inclusive),
        Icon(Icons.beach_access),
        Icon(Icons.cake),
        Icon(Icons.free_breakfast)
      ],
    );
  }
}
```

### GridView.builder

```
class MyGrid extends StatelessWidget {
  const MyGrid({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
        itemCount: 10,
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3, crossAxisSpacing: 10, mainAxisSpacing: 10),
        itemBuilder: (context, index) => Container(
              color: Colors.red,
              alignment: Alignment.center,
              child: Text(
                "Item $index",
                style: const TextStyle(color: Colors.white, fontSize: 20),
              ),
            ));
  }
}
```

## Padding

**在 html 中常见的布局标签都有 padding 属性，但是 Flutter 中很多 Widget 是没有 padding 属性。这个时候我们可以用 Padding 组件处理容器与子元素之间的间距。**

| **属性**    | **说明**                                 |
| ----------- | ---------------------------------------- |
| **padding** | **padding 值，DegeInsetss 设置填充的值** |
| **child**   | **子组件**                               |

## Row

**水平布局组件**

| **属性**               | **说明**           |
| ---------------------- | ------------------ |
| **mainAxisAlignment**  | **主轴的排序方式** |
| **crossAxisAlignment** | **次轴的排序方式** |
| **children**           | **组件子元素**     |

## Column

**垂直布局组件**

| **属性**               | **说明**           |
| ---------------------- | ------------------ |
| **mainAxisAlignment**  | **主轴的排序方式** |
| **crossAxisAlignment** | **次轴的排序方式** |
| **children**           | **组件子元素**     |

## double.infinity 和 double.maxFinite

**double.infinity 和 double.maxFinited 都可以让当前元素的 width 或者 height 达到父元素的尺寸**

**底层代码**

```
static const double nan = 0.0 / 0.0
static const double infinity = 1.0 / 0.0
static const double negativeInfinity = -infinity
static const double minPositive = 5e-324
static const double maxfinite= 1.7976931348623157e+308
```

## Flex Expanded

**Flex 组件可以沿着水平或垂直方向排列子组件，如果你知道主轴方向，使用 Row 或 column 会方便些，因为 **`Row`和 `Column`都继承自 `Flex`，参数基本相同，所以能使用 Flex 的地方基本上都可以使用 Row 或 Column。Flex 本身功能是很强大的，它也可以和 Expanded 组件配合实现弹性布局。

```
class MyFlex extends StatelessWidget {
  const MyFlex({super.key});

  @override
  Widget build(BuildContext context) {
    return Flex(
      direction: Axis.horizontal,
      children: [
        Expanded(
            flex: 1,
            child: Container(
              height: 50,
              color: Colors.red,
            )),
        Expanded(
            flex: 2,
            child: Container(
              height: 50,
              color: Colors.blue,
            )),
      ],
    );
  }
}
```

## Stack

**Stack 表示堆的意思，我们可以用 Stack 或者 Stack 结合 Align 或者 Stack 结合 Positioned 来实现页面的定位布局**

| **属性**      | **说明**                     |
| ------------- | ---------------------------- |
| **alignment** | **配置所有子元素的显示位置** |
| **children**  | **子组件**                   |

## Positioned

**Stack 组件中结合 Positioned 组件也可以控制每个子元素的显示位置**

| **属性**   | **说明**                                                 |
| ---------- | -------------------------------------------------------- |
| **top**    | **子元素距离顶部的距离**                                 |
| **bottom** | **子元素距离底部的距离**                                 |
| **left**   | **子元素距离左侧的距离**                                 |
| **right**  | **子元素距离右侧的距离**                                 |
| **child**  | **子组件**                                               |
| **width**  | **组件的高度（必须是固定值，没法使用 double.infinity）** |
| **height** | **组件的宽度（必须是固定值，没法使用 double.infinity）** |

> `MediaQuery.of(context).size`可以获取设备的高度和宽度

```
class MyStack extends StatelessWidget {
  const MyStack({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 400,
      width: 300,
      color: Colors.yellow,
      child: Stack(
        children: [
          Positioned(
              left: 10,
              top: 10,
              child: Container(
                height: 100,
                width: 100,
                color: Colors.red,
              )),
        ],
      ),
    );
  }
}
```

## Align

**Align 组件可以调整子组件的位置，Stack 组件中结合 Align 组件也可以控制每个子元素的显示位置**

| **属性**      | **说明**                     |
| ------------- | ---------------------------- |
| **alignment** | **配置所有子元素的显示位置** |
| **child**     | **子组件**                   |

## AspectRatio

**AspectRatio 的作用是根据设置调整子元素的宽高比**

**AspectRatio 首先会在布局限制条件允许的范围内尽可能的扩展，widget 的高度是由宽度和比率决定的，类似于 BoxFit 中的 contain，按照固定比率去尽量占满区域**

**如果在满足所有限制条件过后无法找到一个可行的尺寸，AspectRatio 最终将会优先适应布局限制条件，而忽略所设置的比率**

| **属性**        | **说明**                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| **aspectRatio** | **宽高比，最终可能不会根据这个值去布局，具体则要看综合因素，外层是否允许按照这种比率进行布局，这只是一个参考值** |
| **child**       | **子组件**                                                                                                       |

## Card

**Card 是卡片组件块，内容可以由大多数类型的 Widget 构成，Card 具有园角和阴影，这让它看起来有立体感**

| **属性**         | **说明**                                            |
| ---------------- | --------------------------------------------------- |
| **margin**       | **外边距**                                          |
| **child**        | **子组件**                                          |
| **elevation**    | **阴影值的深度**                                    |
| **color**        | **背景颜色**                                        |
| **shadowColor**  | **阴影颜色**                                        |
| **margin**       | **外边距**                                          |
| **clipBehavior** | **内容溢出的剪切方式**                              |
| **Shape**        | **Card 的阴影效果，默认的阴影效果为圆角的长方形边** |

### clipBehavior

`Clip.none` 不剪切

`Clip.hardEdge` 裁剪但不应用抗锯齿

`Clip.antAlias` 裁剪而且抗锯齿

`Clip.antiAliasWithSaveLayer` 带有抗锯齿的剪辑，并在剪辑之后立即保存 saveLayer

## CircleAvatar

**头像**

```
const circleAvatar(
radius: 200,
    backgroundImage: Image.network()
)
```

## 按钮组件

**按钮组件的属性**

| **属性**      | **说明**                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------ |
| **onPressed** | **必填参数，按下按钮时出发的回调，接收一个方法，传 null 表示按钮禁用，会显示禁用相关样式** |
| **child**     | **子组件**                                                                                 |
| **style**     | **通过 ButtonStyle 装饰**                                                                  |

**自定义大小**

```
SizeBox(
width:200,
    height:100,
    children: ElevatedButton(
    ...
    )
)
```

**圆角**

```
style: ButtonStyle(
shape: MaterialStateProperty.all(
    RoundedRectangleBorder(
        borderRadius.: BorderRadius.circular(20)
        )
    )
)
```

**修改边框颜色**

```
OutlinedButton(
style: ButtonStyle(
    side: MaterialStateProperty.all(
        const BorderSide(width:1,color: Colors.red)
        )
    )
)
```

## ElevatedButton

**普通按钮**

```
ElevatedButton.icon(
    icon: const Icon(Icons.home),
    label: const Text("Home"),
    onPressed: () {},
),
```

## TextButton

**文本按钮**

```
TextButton.icon(
    icon: const Icon(Icons.home),
    label: const Text("Home"),
    onPressed: () {},
),
```

## OutlinedButton

**边框按钮**

```
OutlinedButton.icon(
    icon: const Icon(Icons.home),
    label: const Text("Home"),
    onPressed: () {},
),
```

## IconButton

**图标按钮**

```
IconButton.icon(
    icon: const Icon(Icons.home),
    label: const Text("Home"),
    onPressed: () {},
),
```

## Warp

**Wrap 可以实现流布局，单行的 Wrap 跟 Row 表现几乎致，单列的 Wrap 则跟 Row 表现几乎一致。但 Row 与 Column 都是单行单列的，Wrap 则突破了这个限制，mainAxis 上空间不足时，则向 crossAxis 上去扩展显示，**

| **属性**              |                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **direction**         | **主轴的方向，默认水平**                                                                       |
| **alignment**         | **主轴的对齐方式**                                                                             |
| **spacing**           | **主轴方向上的间距**                                                                           |
| **textDirection**     | **文本方向**                                                                                   |
| **verticalDirection** | **定义了 children 摆放顺序，默认是 down，见 Flex 相关属性介绍**                                |
| **runAlignment**      | **run 的对齐方式，run 可以理解为新的行或者列，如果是水平方向布局的话，run 可以理解为新的一行** |
| **runSpacing**        | **run 的间距**                                                                                 |

## BottomNavigationBar

**BottomNavigationBar 是底部导航条，可以让我们定义底部 Tab 切换，bottomNavigationBar 是 Scaffold 组件的参数**

| **属性**         | **说明**                                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| **items**        | **List 底部导航条按钮集合**                                                                         |
| **iconSize**     | **icon**                                                                                            |
| **currentIndex** | **默认选中第几个**                                                                                  |
| **onTap**        | **选中变化回调函数**                                                                                |
| **fixedColor**   | **选中的颜色**                                                                                      |
| **type**         | **BottomNavigationbarType.fixed （四个及以上必须设置该属性）** **BottomNavigationbarType.shifting** |

## Drawer

**在 Scaffold 组件里面传入 drawer 参数可以定义左侧边栏，传入 endDraweri 可以定义右侧边栏，侧边栏默认是隐藏的，我们可以通过手指滑动显示侧边栏，也可以通过点击按钮显示侧边栏。**

```
return Scaffold(
drawer: Drawer(
    child: Text('左侧边栏');
    ),
    endDrawer: Drawer(
    child: Text('右侧边栏');
    )
)
```

## DrawerHeader

| **属性**       | **描述**             |
| -------------- | -------------------- |
| **decoration** | **设置顶部背景颜色** |
| **child**      | **配置子元素**       |
| **padding**    | **内边距**           |
| **margin**     | **外边距**           |

```
drawer: Drawer(
        child: ListView(
        children: const [
          DrawerHeader(
            decoration: BoxDecoration(color: Colors.blue),
            child: Center(
              child: Text(
                "Hello World",
                style: TextStyle(color: Colors.white, fontSize: 20),
              ),
            ),
        ),
        ListTile(
          leading: Icon(Icons.home),
          title: Text("Home"),
        ),
      ],
    ))
```

## UserAccountsDrawerHeader

| **属性**                  | **描述**                         |
| ------------------------- | -------------------------------- |
| **decoration**            | **设置外部背景颜色**             |
| **accountName**           | **账户名称**                     |
| **accountEmail**          | **账户邮箱**                     |
| **currentAccountPicture** | **用户头像**                     |
| **otherAccountsPictures** | **用来设置当前账户其他账户头像** |
| **margin**                | **外边距**                       |

## AppBar

| **属性**            | **描述**                                                                              |
| ------------------- | ------------------------------------------------------------------------------------- |
| **leading**         | **在标题前面显示的一个控件，在首页通常显示应用的 logo；在其他界面通常显示为返回按钮** |
| **title**           | **标题，通常显示为当前界面的标题文字，可以放组件**                                    |
| **actions**         | **通常使用 IconButton 来表示，可以放按钮组**                                          |
| **bottom**          | **通常放 tabBar，标题下面显示一个 tab 导航栏**                                        |
| **backgroundColor** | **导航背景颜色**                                                                      |
| **iconTheme**       | **图标样式**                                                                          |
| **centerTitle**     | **标题是否居中显示**                                                                  |

## TabBar

| **属性**                 | **描述**                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| **tabs**                 | **显示的标签内容，一般使用 Tab 对象，也可以是其他的 Widget**                                          |
| **controller**           | **TabController 对象**                                                                                |
| **isScrollable**         | **是否可滚动**                                                                                        |
| **indicatorColor**       | **指示器颜色**                                                                                        |
| **indicatorWeight**      | **指示器高度**                                                                                        |
| **indicatorPadding**     | **底部指示器的 Padding**                                                                              |
| **indicator**            | **指示器，如边框等**                                                                                  |
| **indicatorSize**        | **指示器大小计算方式** `TabBarIndicatorSize.label`跟文字等宽 `TabBarIndicatorSize.tab`跟每个 tab 等宽 |
| **labelColor**           | **选中 label 颜色**                                                                                   |
| **labelStyle**           | **选中 label 的 Style**                                                                               |
| **labelPadding**         | **每个 label 的 padding 值**                                                                          |
| **unselectedLabelColor** | **未选中 label 颜色**                                                                                 |
| **unselectedLabelStyle** | **未选中 label 的 Style**                                                                             |

```
class MyTabBar extends StatefulWidget {
  const MyTabBar({super.key});

  @override
  State<MyTabBar> createState() => _MyTabBarState();
}

class _MyTabBarState extends State<MyTabBar>
    with SingleTickerProviderStateMixin { // 重点
  late TabController _tabController; // 重点

  // 生命周期
  @override
  void initState() { // 重点
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: const Text("My TabBar"),
          bottom: TabBar( //重点
            controller: _tabController,
            tabs: const [
              Tab(icon: Icon(Icons.home), text: "Home"),
              Tab(icon: Icon(Icons.tv), text: "TV"),
              Tab(icon: Icon(Icons.movie), text: "Movie"),
            ],
          )),
      body: TabBarView( // 重点
        controller: _tabController,
        children: const [
          Center(child: Text("Home")),
          Center(child: Text("TV")),
          Center(child: Text("Movie")),
        ],
      ),
    );
  }
}
```

## TabBarView

| **属性**       | **说明**               |
| -------------- | ---------------------- |
| **controller** | **TabController 对象** |
| **children**   | **子对象**             |

## 路由

**Flutter 中的路由通俗的讲就是页面跳转。在 Flutter 中通过 Navigator 组件管理路由导航。并提供了管理堆栈的方法。如：**`Navigator.push`和 `Navigator.pop`

### 基本路由

**场景：从 HomePage 组件跳转到 SearchPage 组件**

1. **在 HomePage 中引入 SearchPage.dart**
   ```
   import '../SearchPage.dart'
   ```
2. **在 HomePage 中通过下面方法跳转**
   ```
   Center(
   child: ElevatedButton(onPressed:(){
           Navigator.of(context).push(
           MaterialPageRoute(builder: (context){
                   return const SearchPage();
               })
           );
       },child: const Text("跳转到搜索页面"))，
   )
   ```

**跳转传值**

```
//
Navigator.of(context).push(
    MaterialPageRoute(builder: (context){
        return const SearchPage(title:"Str");
    })
);

//
class SearchPage extends Statefulwidget {
    final String title;
    const searchPage({super.key,this.title="Search Page"});
}
```

### 命名路由

1. **在 main.dart 中配置路由**
   ```
   import './pages/search.dart'
       
   void main() {
     runApp(const MaterialApp(
       initialRoute: '/', // 初始化路由
       routes: {
         "/": (context) => const MyTabBar(),
         "/setting": (context) => const SettingPage(),
       },
     ));
   }
   ```
2. **跳转路由**
   ```
   Navigator.pushNamed(context, '/setting');
   ```

**跳转传值**

1. **定义路由**
   ```
   Map routes = {
       "/": (context) => const MyTabBar(),
       "/setting": (context,arguments) => const SettingPage(arguments:"arguments"),
   };
   ```
2. **配置 onGenerateRoute**
   ```
   onGenerateRoute: (RouteSettings settings) {
       final String? name = settings.name;
       final Function pageContentBuilder = routes[name];
       if (pageContentBuilder != null) {
           if (settings.arguments != null) {
               final Route route = MaterialPageRoute(
                   builder: (context) =>
                   pageContentBuilder(context, arguments: settings.arguments));
               return route;
           } else {
               final Route route = MaterialPageRoute(
                   builder: (context) => pageContentBuilder(context));
               return route;
           }
       }
   }
   ```
3. **发送参数**
   ```
   Navigator.pushNamed(context, '/setting',arguements:{
       "title":"home"
   });
   ```
4. **接收参数**
   ```
   class SettingPage extends StatefulWidget {
       final Map arguments;
    const SettingPage({super.key,required this.arguments});
    ...
   }
   ```

**封装**

```
- lib
- routes
- routes.dart
```

**routes.dart**

```
import 'package:flutter/material.dart';
import '../setting.dart';

var routes = {
  '/': (context) => const MyTabBar(),
  '/setting': (context) => const SettingPage(),
};

var onGenerateRoute = (RouteSettings settings) {
  // 统一处理
  final String? name = settings.name;
  final Function? pageContentBuilder = routes[name];
  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      final Route route = MaterialPageRoute(
          builder: (context) =>
              pageContentBuilder(context, arguments: settings.arguments));
      return route;
    } else {
      final Route route =
          MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
  return null;
};
```

### 返回上一级路由

```
Navigator.of(context).pop();
```

### 替换路由

```
Navigator.of(context).pushReplacementNamed('/registerSecond');
```

### 返回到根路由

```
Navigator.of(context).pushAndRemoveUntil(
MaterialPageRoute(
        builder: (BuildContext context ) {
        return const Tabs();
    }),(route) => false);
```

## AlertDialog

```
void _alertDialog() async {
    var result = await showDialog(context: context, builder: (context){
        return AlertDialog(
            title:const Text("提示信息"),
            content: const Text("您确定要删除吗"),
            actions: [
                TextButton(onPressed:(){
                    printf("ok");
                    Navigator.of(context).pop("ok"); //点击按钮让AlertDialog消失
                }),child: const Text('确定')),
                TextButton(onPressed:(){
                    printf("cancel");
                    Navigator.of(context).pop("cancel"); //点击按钮让AlertDialog消失
                }),child: const Text('取消'))
            ],
        );
    });
    print(result) // 获取pop返回的值
}
```

## SImpleDialog

```
void _simpleDialog() async{
var result = await showDialog(
        barrierDismissible: true, // 点击灰色背景的时候是否消失弹出框
        context: context,
        builder: (conntext){
            return SimpleDialog(
                title: const Text("请选择语言"),
                children: [
                    SimpleDialogOption(
                        child: const Text("汉语"),
                        onPressed: ()
                    ),
                    SimpleDialogOption(
                        child: const Text("汉语"),
                    )
                ],
            );
        }
    );
}
```

## showModalBottomSheet()

```
void _modelBottomSheet() {
showModalBottomSheet(
        context: context,
        builder: (context){
            return Container(
            child: Column(
                children: [
                        ListTile(
                        title: Text(""),
                            onTap：(){
navigator.of(context).pop();
                            }
                        ),
                        ListTile(
                        title: Text(""),
                            onTap：(){
navigator.of(context).pop();
                            }
                        ),
                    ]
                )
            )
}
    );
}
```

## 自定义 Dialog

```
class MyDialog extends Dialog {
  const MyDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return Material(
      type: MaterialType.transparency,
      child: Center(
          child: Container(
        height: 200,
        width: 200,
        color: Colors.white,
        child: const Center(
          child: Text("Hello"),
        ),
      )),
    );
  }
}
```

## PageView

**Flutter 中的轮动图以及抖音上下划页切换视频功能等等，都可以通过 PageView 轻松实现**

| **属性**                   | **描述**                                               |
| -------------------------- | ------------------------------------------------------ |
| **scrollDirection**        | **Axis.horizonta 水平方向** **Axis.vertical 垂直方向** |
| **children**               | **配置子元素**                                         |
| **allowImplicitScrolling** | **缓存当前页面的前后两页**                             |
| **onPageChanged**          | **page 改变的时候触发**                                |

```
return PageView(
children: [
        Center(
        child: Text('1')
        ),
        Center(
        child: Text('1')
        )
    ]
)
    
//PageView.builder()
return PageView.builder(
itemCount: 10,
    itemBuilder: (context,index){
        return Center(
        child: Text("$index");
        )
    }
)
```

**跳转**

```
// 定义
late Pagecontroller _pageControlller;

@override
void initState() {
    _pageControlller = PageController(initialPage: 0);
}


// 配置
PageView.builder(
controller: _pageController,
)
    
// 使用
_pageControlller.animateToPage(page,duration: Duration(millisecondes: 200,curve: Curves.linear));

// 销毁
@override
void dispose() {
    _pageControlller.dispose();
}
```

**缓存**

```
class _MyContainerState extends State<MyContainer> with AutomaticKeepAliveClientMixin {
...
    @override
    bool get wantkeepAlive => true;
}
```

## 定时器

```
Timer t = Timer.periodic(const Duration(seconds: 3), (timer) {
print("run");
    // timer.cancel();  // 取消定时器
})

t.cancel(); // 取消定时器
```

**组件销毁的时候取消定时器**

```
void dispose() {
super.dispose();
    t.cancel;
}
```

## Key

**在 Flutter 中，Key 是不能重复使用的，所以 key 一般用来做唯一标识。组件在更新的时候，其状态的保存主要是通过判断组件的类型或者 key 值是否一致，因此，当各组件的类型不同的时候，类型已经足够用来区分不同的组件了，此时可以不必使用 key，但是如果同时存在多个同一类型的控件的时候，此时类型已经无法作为区分条件了，我们就需要使用到 key。**

**Flutter key 子类包含** `localKey`和 `GlobalKey`

- **局部键（LocalKey）：ValueKey、ObjectKey、UniqueKey**
  ```
  Container(
  key: ValueKey('1'),
  )
  ```
- **全局键（GlobalKey）：GlobalKey、GlobalObjectKey**

  ```
  final GlobalKey _globalKey = GlobalKey();

  // 获取子组件的属性
  var boxState = _globalKey.currentState as _BoxState;

  // 调用子组件的方法
  boxState.run();

  // 获取子组件
  var boxWidget = _globalKey.currentWidget as Box;

  // 获取子组件渲染的属性
  var renderBox= _globalKeu.currentContext!.findRenderObject() as RenderBox
  ```

## AnimatedList

**AnimatedList 和 ListView 的功能大体相似，不同的是，AnimatedList 可以在列表中插入或删除节点时执行一个动画，在需要添加或删除列表项的场景中会提高用户体验**

**AnimatedList 是一个 Statefulwidget，它对应的 State 类型为 AnimatedListState，添加和删除元素的方法位于 AnimatedListState 中**

```
void insertItem(int index, { Duration duration = _kDuration });

void removeItem(int index, AnimatedListRemoveItemBuilder builder, { Duration duration = _kDuration });
```

**属性**

| **属性**             | **描述**                                                          |
| -------------------- | ----------------------------------------------------------------- |
| **key**              | **globalKey final globalKey = GlobalKey();**                      |
| **initialItemCount** | **子元素数量**                                                    |
| **itemBUilder**      | **方法( BuildContext context,int index, Animation animation) {}** |

```
...
final _globalKey = GlobalKey<AnimatedListState>
...
_globalKey.currentState!.insertItem(list.length - 1);
...
AnimatedList(
    key: _globalKey,
initialItemCount: list.length,
    itemBuilder: ((context, index, animation) {
        return FadeTransition(
        opacity: animation,
            child: ListTile(
            title: Text(list[index])
            )
        );
    })
)
```

## 动画

### 隐式动画

**通过几行代码就可以实现隐式动画，由于隐式动画背后的实现原理和繁琐的操作细节都被隐去了，所以叫隐式动画，Flutter 中提供的 AnimatedContainer、AnimatedPadding、AnimatedPositioned,AnimatedOpacity、AnimatedDefaultTextStyle、AnimatedSwitcher 都属于隐式动画。**
**隐式动画中可以通过** `duration`配置动画时长、可以通过 `Curve`(曲线)来配置动画过程

#### AnimatedContainer

**AnimatedContainer 的属性和 Container.属性基本是一样的，当 AnimatedContainer 属性改变的时候就会触发动画。**

```
AnimatedContainer(
duration: const Duration(seconds: 1,millliseconds: 100),
    width: flag?100:200,
    height: flag?100:200
)
```

#### AnimatedPadding

```
AnimatedPadding(
    curve: Curves.easeIn,
duration: const Duration(seconds: 1,millliseconds: 100),
    width: flag?100:200,
    height: flag?100:200
)
```

#### AnimatedOpacity

```
AnimatedOpacity(
    opacity: flag?0.1:1
    curve: Curves.easeIn,
duration: const Duration(seconds: 1,millliseconds: 100),
)
```

#### AnimatedPositioned

**同上**

#### AnimatedPositioned

**同上**

#### AnimatedSwitcher

**当子元素改变的时候触发动画**

### 显式动画

**常见的显式动画有 RotationTransition、FadeTransition、ScaleTransition、SlideTransition.**
**Animatedlcon。在显示动画中开发者需要创建一个 AnimationController,.通过 AnimationController**
**控制动画的开始、暂停、重置、跳转、倒播等**

## Getx

**Get 以是 Flutter.上的一个轻量且强大的解决方案，Gex 为我们提供了高性能的状态管理、智能的依赖注入和便捷的路由管理。**

### 安装

**将 Getx 添加到你的** `pubspec.yaml`文件中

```
dependencies:
  get: version
```

**在需要的文件中引入**

```
import 'package:get/get.dart';
```

**修改应用顶层**

```
MaterialApp() -> GetMaterialApp()
```

### 调用 Dialog

```
Get.defaultDialog();
```

### 调用 Snackbar

```
Get.snackbar();
```

### 调用 BottomSheet

```
Get.bottomSheet();
```

### 切换主题

```
Get.changeTheme(ThemeData.light());
```

### 路由管理

#### 跳转路由

```
Get.toNamed();
```

#### 替换路由

```
Get.off(); // 进入下一个页面但没有返回上一个页面的选项
```

#### 返回上一级

```
Get.back();
```

#### 返回根路由

```
Get.offAll();
```

#### 路由跳转传值以及接收数据

**路由配置**

```
getPages: [
    GetPage(name: "/shop", page: () => const ShopPage()),
    ...
]
```

**跳转传值**

```
Get.toNamed("/shop",arguments: {
   "id": 20
});
```

**接收数据**

```
print(Get.arguments);
```

#### 路由封装

```
// routes.dart
import 'package:get/get.dart';
import '../pages/tabs/dart';

class AppPage {
    static final routes = [
        GetPage(name: '/' , page: () => const Tabs()),
    ]
}

//
GetMaterialApp(
    initialRoute: '/',
    getPages: AppPage.routes,
)
```

#### 路由中间件

**配置**

```
//
import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';

class ShopMiddleWare extends GetMiddleware {

    @override
    RouteSettings? redirect(String? route){
return const RouteSettings(name: "/login");
    }
}


//
GetPage(name: '/' , page: () => const Tabs()， middlewares: [])
```

### 状态管理

#### 响应式状态管理

```
// 定义
final _count = 0.obs;

// 修改
_count++; // 不用套setState()

// 使用
Obx(() => {
Text("${_count.value}");
})
```

#### 依赖管理

```
- lib
    - controllers
    - counter.dart
```

```
import 'package:get/get.dart';

class CounterController extends GetxController {
    RxInt counter = 0.obs;
    
    inc(){
counter.value++;
        update();
    }
    dec(){
counter.value--;
        update();
    }
}
```

```
class _HomePageState extends State<HomePage> {
    CounterController  counterController = Get.put(CounterController());
    ...
     Obx(()=> Text("${counterController.counter}"));
    ...
        counterControlle.inc();
}
```

```
class _CategoryPageState extends State<CategoryPage> {
CounterController  counterController = Get.find();
}
```

#### Binding

**在我们使用 GetX 状态管理器的时候，往往每次都是用需要手动实例化一个控制器，这样的话基本页面都需要实例化一次，这样就太麻烦了，而** `Binding`能解决上述问题，可以在项目初始化时把所有需要进行状态管理的控制器进行统一初始化。\*\*
\*\*在前面的文章中，我们经常使用 `Get.put(MyContro11er())`来进行控制器实例的创建，这样我们就算不使用控制器实例也会被创建，其实 Gtx 还提供很多创建实例的方法，可根据不同的业务来进行创建，接下来我们简单介绍一下几个最常用的

- `Get.put()`:不使用控制器实例也会被创建
- `Get.lazyPut()`:獭加载方式创建实例，只有在使用时才创建
- `Get.putAsync()`:Get.put()的异步版版本
- `Get.create()`:每次使用都会创建一个新的实例

```
- lib
    - binding
    - binding.dart
```

```
import 'package:get/get.dart';
import '../controllers/counter.dart';

class AllControllerBinding implements Bindings {
@override
    void dependencies() {
Get.lazyPut<CounterController>(() => CounterController());
    }
}
```

```
import './binding/binding.dart';
...
GetMaterialApp(
initialBinding: AllControllerBinding(),
)
```
