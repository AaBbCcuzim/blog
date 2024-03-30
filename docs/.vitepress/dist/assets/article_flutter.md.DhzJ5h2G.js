import{_ as s,c as n,o as a,a4 as t}from"./chunks/framework.ClEHkwpW.js";const b=JSON.parse('{"title":"Flutter","description":"","frontmatter":{},"headers":[],"relativePath":"article/flutter.md","filePath":"article/flutter.md"}'),e={name:"article/flutter.md"},p=t(`<h1 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h1><p><strong>Flutter 是谷歌公司开发的一款开源、免费的 U 框架，可以让我们快速的在 Android 和 iOS 上构建高质量 App。它最大的特点就是跨平台、以及高性能。目前 Flutter 已经支持 iOS、Android、Web、Windows、nacOS、Linux 等。</strong></p><h2 id="vscode-开发-flutter" tabindex="-1">vscode 开发 flutter <a class="header-anchor" href="#vscode-开发-flutter" aria-label="Permalink to &quot;vscode 开发 flutter&quot;">​</a></h2><p><code>flutter run -d all</code>运行项目</p><p><strong>r 键</strong>：热加载项目</p><p><strong>R 键</strong>：热重启项目</p><p><strong>p 键</strong>：显示网格，掌握布局</p><p><strong>o 键</strong>：切换 android 和 ios 的预览模式</p><p><strong>q 键</strong>：退出调试预览模式</p><h2 id="materialapp" tabindex="-1">MaterialApp <a class="header-anchor" href="#materialapp" aria-label="Permalink to &quot;MaterialApp&quot;">​</a></h2><p><strong>materialApp 是一个方便的 Widget，它封装了应用程序实现 Material Design 所需要的一些 Widget。一般作为顶层 widget 使用。</strong></p><p><strong>常用的属性</strong></p><ul><li><strong>home（主页）</strong></li><li><strong>title（标题）</strong></li><li><strong>color（颜色）</strong></li><li><strong>theme（主题）</strong></li><li><strong>routes（路由）</strong></li></ul><h2 id="scaffold" tabindex="-1">Scaffold <a class="header-anchor" href="#scaffold" aria-label="Permalink to &quot;Scaffold&quot;">​</a></h2><p><strong>Scaffold 是 Material Design 布局结构的基本实现，此类提供了用于显示 drawer、snackbar 和底部 sheet 的 API</strong></p><p><strong>常用的属性</strong></p><ul><li><strong>appBar 显示在界面顶部的一个 AppBar</strong></li><li><strong>body 当前页面所显示的主要内容 Widget</strong></li><li><strong>drawer 抽屉菜单控件</strong></li></ul><h2 id="flutter-把内容单独抽离成一个组件" tabindex="-1">Flutter 把内容单独抽离成一个组件 <a class="header-anchor" href="#flutter-把内容单独抽离成一个组件" aria-label="Permalink to &quot;Flutter 把内容单独抽离成一个组件&quot;">​</a></h2><p><strong>在 Flutter 中自定义组件其实就是一个类，这个类需要继承 StatelessWidget/StatefulWidget</strong></p><p><code>StatelessWidget</code>是无状态组件，状态不可变的 widget</p><p><code>StatefulWidget</code>是有状态组件，持有的状态可能在 widget 生命周期改变</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main() {</span></span>
<span class="line"><span>  runApp(const MyApp());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyApp extends StatelessWidget {</span></span>
<span class="line"><span>  const MyApp({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return MaterialApp(</span></span>
<span class="line"><span>      title: &#39;Flutter Demo&#39;,</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-label="Permalink to &quot;Container&quot;">​</a></h2><h3 id="alignment" tabindex="-1">alignment <a class="header-anchor" href="#alignment" aria-label="Permalink to &quot;alignment&quot;">​</a></h3><p><code>Alignment.topCenter</code>：顶部居中对齐</p><p><code>Alignment.topLeft</code>：顶部左对齐</p><p><code>Alignment.topRight</code>：顶部右对齐</p><p><code>Alignment.center</code>：水平垂直居中对齐</p><p><code>Alignment.centerLeft</code>：垂直居中水平居左对齐</p><p><code>Alignment.centerRight</code>：垂直居中水平居右对齐</p><p><code>Alignment.bottomCenter</code>：底部居中对齐</p><p><code>Alignment.bottomLeft</code>：底部居左对齐</p><p><code>Alignment.bottomRight</code>：底部居右对齐</p><h3 id="decoration" tabindex="-1">decoration <a class="header-anchor" href="#decoration" aria-label="Permalink to &quot;decoration&quot;">​</a></h3><p><code>BoxDecoration</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>decoration: BoxDecoration(</span></span>
<span class="line"><span>            color: Colors.red, // 背景颜色</span></span>
<span class="line"><span>            border: Border.all( // 边框</span></span>
<span class="line"><span>                color: Colors.blue,</span></span>
<span class="line"><span>                width: 2</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>   borderRadius: BorderRadius.circular(100), // 圆角</span></span>
<span class="line"><span>     boxShadow: const [ // 阴影</span></span>
<span class="line"><span>                BoxShadow(</span></span>
<span class="line"><span>                    color: Colors.grey,</span></span>
<span class="line"><span>                    blurRadius: 10</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>    gradient: const LinearGradient( // 背景渐变</span></span>
<span class="line"><span>              colors: [Colors.red, Colors.blue],</span></span>
<span class="line"><span>              begin: Alignment.topLeft,</span></span>
<span class="line"><span>              end: Alignment.bottomRight</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>),</span></span></code></pre></div><h3 id="margin" tabindex="-1">margin <a class="header-anchor" href="#margin" aria-label="Permalink to &quot;margin&quot;">​</a></h3><p><strong>margin 属性是表示 Container 与外部其他组件的距离</strong></p><h3 id="padding" tabindex="-1">padding <a class="header-anchor" href="#padding" aria-label="Permalink to &quot;padding&quot;">​</a></h3><p><strong>padding 就是 Container 的内边距，指 Container 边缘与 Child 之间的距离</strong></p><h3 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h3><p><strong>让 Container 进行一些变化</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>transform: Matrix4.translationValues(-40,0,0) //位移</span></span></code></pre></div><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p><strong>容器高度</strong></p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p><strong>容器宽度</strong></p><h3 id="child" tabindex="-1">child <a class="header-anchor" href="#child" aria-label="Permalink to &quot;child&quot;">​</a></h3><p><strong>容器子元素</strong></p><h3 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h3><p><strong>背景图片</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>image:DecorationImage(</span></span>
<span class="line"><span>image:const NetworkImage(&quot;url&quot;),</span></span>
<span class="line"><span>    fit:BoxFit.cover</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="text" tabindex="-1">Text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;Text&quot;">​</a></h2><h3 id="textalign" tabindex="-1">textAlign <a class="header-anchor" href="#textalign" aria-label="Permalink to &quot;textAlign&quot;">​</a></h3><p><strong>文本对齐方式</strong></p><p><code>TextAlign.center</code>：居中</p><p><code>TextAlign.left</code>：左对齐</p><p><code>TextAlign.right</code>：右对齐</p><p><code>TextAlign.justify</code>：两端对齐</p><h3 id="textdirection" tabindex="-1">textDirection <a class="header-anchor" href="#textdirection" aria-label="Permalink to &quot;textDirection&quot;">​</a></h3><p><strong>文本方向</strong></p><p><code>ltr</code>：从左至右</p><p><code>rtl</code>：从右至左</p><h3 id="overflow" tabindex="-1">overflow <a class="header-anchor" href="#overflow" aria-label="Permalink to &quot;overflow&quot;">​</a></h3><p><strong>文字超出屏幕之后的处理方式</strong></p><p><code>clip</code>：裁剪</p><p><code>fade</code>：渐隐</p><p><code>ellipsis</code>：省略号</p><h3 id="textscalefactor" tabindex="-1">textScaleFactor <a class="header-anchor" href="#textscalefactor" aria-label="Permalink to &quot;textScaleFactor&quot;">​</a></h3><p><strong>字体显示倍率</strong></p><h3 id="maxlines" tabindex="-1">maxLines <a class="header-anchor" href="#maxlines" aria-label="Permalink to &quot;maxLines&quot;">​</a></h3><p><strong>文字显示最大行数</strong></p><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h3><p><strong>字体的样式设置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> style: TextStyle(</span></span>
<span class="line"><span>                fontSize: 20,</span></span>
<span class="line"><span>                fontWeight: FontWeight.w900,</span></span>
<span class="line"><span>                color: Colors.red,</span></span>
<span class="line"><span>                fontStyle: FontStyle.italic,</span></span>
<span class="line"><span>                letterSpacing: 6,</span></span>
<span class="line"><span>                decoration: TextDecoration.underline,</span></span>
<span class="line"><span>                decorationColor: Colors.black,</span></span>
<span class="line"><span>                decorationStyle: TextDecorationStyle.dashed</span></span>
<span class="line"><span> )</span></span></code></pre></div><h2 id="image-1" tabindex="-1">Image <a class="header-anchor" href="#image-1" aria-label="Permalink to &quot;Image&quot;">​</a></h2><p><strong>Flutter 中，我们可以通过 Image 组件来加载并显示图片 Image 的数据源可以是 asset、文件、内存以及网络</strong></p><p><code>Image.asset</code> 本地图片</p><p><code>Image.network</code> 远程图片</p><blockquote><p><strong>本地图片</strong></p><ol><li><p><strong>先在项目根目录建立一个</strong> <code>images</code>文件夹, 存放本地图片</p></li><li><p><strong>在</strong> <code>pubspec.yaml</code>中配置（注意缩进格式）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>assets:</span></span>
<span class="line"><span>  - images/a_dot_burr.jpeg</span></span>
<span class="line"><span>  - images/a_dot_ham.jpeg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - images/ 相对路径</span></span></code></pre></div></li></ol></blockquote><h3 id="alignment-1" tabindex="-1">alignment <a class="header-anchor" href="#alignment-1" aria-label="Permalink to &quot;alignment&quot;">​</a></h3><p><strong>图片的对齐方式</strong></p><h3 id="fit" tabindex="-1">fit <a class="header-anchor" href="#fit" aria-label="Permalink to &quot;fit&quot;">​</a></h3><p><strong>控制图片的拉伸和压缩</strong></p><p><code>Boxfit.fill</code> 全图显示，图片会被拉伸，并充满父容器</p><p><code>Boxfit.contain</code> 全图显示，显示原比例，可能会有空隙</p><p><code>Boxfit.cover</code> 显示可能拉伸，可能裁切，充满（不变形）</p><p><code>Boxfit.fitWidth</code> 宽度充满（横向充满）显示可能拉伸，可能裁切</p><p><code>Boxfit.fitHeight</code> 高度充满（竖向充满）显示可能拉伸，可能裁切</p><p><code>Boxfit.scaleDown</code> 效果跟 contain 差不多，但是此属性不允许显示超过原图片大小，可小不可大</p><h3 id="repeat" tabindex="-1">repeat <a class="header-anchor" href="#repeat" aria-label="Permalink to &quot;repeat&quot;">​</a></h3><p><strong>平铺</strong></p><p><code>ImageRepeat.repeat</code>：横向和纵向都进行重复，知道铺满整个画布</p><p><code>ImageRepeat.repeatX</code>：横向重复，纵向不重复</p><p><code>ImageRepeat.repeatY</code>：纵向重复，横向不重复</p><h3 id="width-1" tabindex="-1">width <a class="header-anchor" href="#width-1" aria-label="Permalink to &quot;width&quot;">​</a></h3><p><strong>宽度</strong></p><h3 id="height-1" tabindex="-1">height <a class="header-anchor" href="#height-1" aria-label="Permalink to &quot;height&quot;">​</a></h3><p><strong>高度</strong></p><h2 id="cilpoval" tabindex="-1">CilpOval <a class="header-anchor" href="#cilpoval" aria-label="Permalink to &quot;CilpOval&quot;">​</a></h2><p><strong>实现圆角图片</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ClipOval(</span></span>
<span class="line"><span> child: Image.network(</span></span>
<span class="line"><span>        &quot;https://pic.kuaizhan.com/g3/f9/ca/cde4-1b7c-4514-926e-15667915898555&quot;,</span></span>
<span class="line"><span>        width: 150,</span></span>
<span class="line"><span>        height: 150,</span></span>
<span class="line"><span>        fit: BoxFit.cover,</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;Icon&quot;">​</a></h2><h3 id="flutter-官方-icon-图标" tabindex="-1">Flutter 官方 icon 图标 <a class="header-anchor" href="#flutter-官方-icon-图标" aria-label="Permalink to &quot;Flutter 官方 icon 图标&quot;">​</a></h3><p><strong>Material Design 所有图标可以在其官网查看：</strong><a href="https://material.io/tools/icons/" target="_blank" rel="noreferrer">https://material.io/tools/icons/</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Icon(</span></span>
<span class="line"><span>    Icons.abc,</span></span>
<span class="line"><span>    color: Colors.blue,</span></span>
<span class="line"><span>    size: 40,</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="自定义图标" tabindex="-1">自定义图标 <a class="header-anchor" href="#自定义图标" aria-label="Permalink to &quot;自定义图标&quot;">​</a></h3><p><strong>官方图标足够，此处暂时省略</strong></p><h2 id="listview" tabindex="-1">ListView <a class="header-anchor" href="#listview" aria-label="Permalink to &quot;ListView&quot;">​</a></h2><p><strong>列表布局是项目开发中最常用的一种布局方式。Flutter 中我们可以通过 ListView 来定义列表项，支持垂直和水平方向展示。通过一个属性就可以控制列表的显示方向。</strong></p><p><strong>列表组件参数</strong></p><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>scrollDirection</strong></td><td><strong>Axis</strong></td><td><strong>列表方向</strong></td></tr><tr><td><strong>padding</strong></td><td><strong>EdgeinsetsGeometry</strong></td><td><strong>内边距</strong></td></tr><tr><td><strong>resolve</strong></td><td><strong>bool</strong></td><td><strong>组件反序排列</strong></td></tr><tr><td><strong>children</strong></td><td><strong>List</strong></td><td><strong>列表元素</strong></td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ListView(</span></span>
<span class="line"><span>    children: const [</span></span>
<span class="line"><span>        ListTile(</span></span>
<span class="line"><span>            leading: Icon(Icons.home),</span></span>
<span class="line"><span>            title: Text(&quot;list item&quot;),</span></span>
<span class="line"><span>            trailing: Icon(Icons.chevron_right_sharp),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        Divider(),</span></span>
<span class="line"><span>        ListTile(</span></span>
<span class="line"><span>            leading: Icon(Icons.assessment),</span></span>
<span class="line"><span>            title: Text(&quot;list item&quot;),</span></span>
<span class="line"><span>            trailing: Icon(Icons.chevron_right_sharp),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>))</span></span></code></pre></div><p><strong>动态列表</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// for</span></span>
<span class="line"><span>class MyList extends StatelessWidget {</span></span>
<span class="line"><span>  const MyList({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  List&lt;Widget&gt; _getData() {</span></span>
<span class="line"><span>    List&lt;Widget&gt; list = [];</span></span>
<span class="line"><span>    for (var i = 0; i &lt; 20; i++) {</span></span>
<span class="line"><span>      list.add(ListTile(</span></span>
<span class="line"><span>        title: Text(&quot;我是$i列表&quot;),</span></span>
<span class="line"><span>      ));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return list;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return ListView(</span></span>
<span class="line"><span>      children: _getData(),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ListView.builder</span></span>
<span class="line"><span>class MyList extends StatelessWidget {</span></span>
<span class="line"><span>  List&lt;String&gt; items = [];</span></span>
<span class="line"><span>  MyList({super.key}) {</span></span>
<span class="line"><span>    items = List&lt;String&gt;.generate(1000, (index) =&gt; &quot;Item $index&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return ListView.builder(</span></span>
<span class="line"><span>        itemCount: items.length,</span></span>
<span class="line"><span>        itemBuilder: (context, index) =&gt; ListTile(</span></span>
<span class="line"><span>              title: Text(items[index]),</span></span>
<span class="line"><span>            ));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="gridview" tabindex="-1">GridView <a class="header-anchor" href="#gridview" aria-label="Permalink to &quot;GridView&quot;">​</a></h2><p><strong>Gridview 网格布局在实际项目中用的也是非常多的，当我们想让可以滚动的元素使用短阵方式排列的时候。此时我们可以用网格列表组件 Gridview 实现布局。</strong></p><p><strong>常用属性</strong></p><table><thead><tr><th><strong>名称</strong></th><th><strong>类型</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>scrollDirection</strong></td><td><strong>Axis</strong></td><td><strong>滚动方法</strong></td></tr><tr><td><strong>padding</strong></td><td><strong>EdgeInsetsGeometry</strong></td><td><strong>内边距</strong></td></tr><tr><td><strong>resolve</strong></td><td><strong>bool</strong></td><td><strong>组件反向排序</strong></td></tr><tr><td><strong>crossAxisSpacing</strong></td><td><strong>double</strong></td><td><strong>水瓶子 Widget 之间间距</strong></td></tr><tr><td><strong>mainAxisSpacing</strong></td><td><strong>double</strong></td><td><strong>垂直子 Widget 之间间距</strong></td></tr><tr><td><strong>crossAxisCount</strong></td><td><strong>int 用在 GridView.count</strong></td><td><strong>一行的 Widget 数量</strong></td></tr><tr><td><strong>maxCrossAxisExtent</strong></td><td><strong>double 用在 GridView.extent</strong></td><td><strong>横轴子元素的最大长度</strong></td></tr><tr><td><strong>childAspectRatio</strong></td><td><strong>double</strong></td><td><strong>子 Widget 宽高比例</strong></td></tr><tr><td><strong>children</strong></td><td></td><td><strong>[]</strong></td></tr><tr><td><strong>gridDelegate</strong></td><td><strong>SliverGridDelegateWithFixedCrossAxisCount</strong> <strong>SliverGridDelegateWithFixedCrossAxisExtent</strong></td><td><strong>控制布局主要用在 GridView.builder 里面</strong></td></tr></tbody></table><h3 id="girdview-count" tabindex="-1">GirdView.count <a class="header-anchor" href="#girdview-count" aria-label="Permalink to &quot;GirdView.count&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyGrid extends StatelessWidget {</span></span>
<span class="line"><span>  const MyGrid({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return GridView.count(</span></span>
<span class="line"><span>      crossAxisCount: 4,</span></span>
<span class="line"><span>      children: const [</span></span>
<span class="line"><span>        Icon(Icons.ac_unit),</span></span>
<span class="line"><span>        Icon(Icons.airport_shuttle),</span></span>
<span class="line"><span>        Icon(Icons.all_inclusive),</span></span>
<span class="line"><span>        Icon(Icons.beach_access),</span></span>
<span class="line"><span>        Icon(Icons.cake),</span></span>
<span class="line"><span>        Icon(Icons.free_breakfast)</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="girdview-extent" tabindex="-1">GirdView.extent <a class="header-anchor" href="#girdview-extent" aria-label="Permalink to &quot;GirdView.extent&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyGrid extends StatelessWidget {</span></span>
<span class="line"><span>  const MyGrid({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return GridView.extent(</span></span>
<span class="line"><span>      maxCrossAxisExtent: 40,</span></span>
<span class="line"><span>      children: const [</span></span>
<span class="line"><span>        Icon(Icons.ac_unit),</span></span>
<span class="line"><span>        Icon(Icons.airport_shuttle),</span></span>
<span class="line"><span>        Icon(Icons.all_inclusive),</span></span>
<span class="line"><span>        Icon(Icons.beach_access),</span></span>
<span class="line"><span>        Icon(Icons.cake),</span></span>
<span class="line"><span>        Icon(Icons.free_breakfast)</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="gridview-builder" tabindex="-1">GridView.builder <a class="header-anchor" href="#gridview-builder" aria-label="Permalink to &quot;GridView.builder&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyGrid extends StatelessWidget {</span></span>
<span class="line"><span>  const MyGrid({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return GridView.builder(</span></span>
<span class="line"><span>        itemCount: 10,</span></span>
<span class="line"><span>        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(</span></span>
<span class="line"><span>            crossAxisCount: 3, crossAxisSpacing: 10, mainAxisSpacing: 10),</span></span>
<span class="line"><span>        itemBuilder: (context, index) =&gt; Container(</span></span>
<span class="line"><span>              color: Colors.red,</span></span>
<span class="line"><span>              alignment: Alignment.center,</span></span>
<span class="line"><span>              child: Text(</span></span>
<span class="line"><span>                &quot;Item $index&quot;,</span></span>
<span class="line"><span>                style: const TextStyle(color: Colors.white, fontSize: 20),</span></span>
<span class="line"><span>              ),</span></span>
<span class="line"><span>            ));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="padding-1" tabindex="-1">Padding <a class="header-anchor" href="#padding-1" aria-label="Permalink to &quot;Padding&quot;">​</a></h2><p><strong>在 html 中常见的布局标签都有 padding 属性，但是 Flutter 中很多 Widget 是没有 padding 属性。这个时候我们可以用 Padding 组件处理容器与子元素之间的间距。</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>padding</strong></td><td><strong>padding 值，DegeInsetss 设置填充的值</strong></td></tr><tr><td><strong>child</strong></td><td><strong>子组件</strong></td></tr></tbody></table><h2 id="row" tabindex="-1">Row <a class="header-anchor" href="#row" aria-label="Permalink to &quot;Row&quot;">​</a></h2><p><strong>水平布局组件</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>mainAxisAlignment</strong></td><td><strong>主轴的排序方式</strong></td></tr><tr><td><strong>crossAxisAlignment</strong></td><td><strong>次轴的排序方式</strong></td></tr><tr><td><strong>children</strong></td><td><strong>组件子元素</strong></td></tr></tbody></table><h2 id="column" tabindex="-1">Column <a class="header-anchor" href="#column" aria-label="Permalink to &quot;Column&quot;">​</a></h2><p><strong>垂直布局组件</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>mainAxisAlignment</strong></td><td><strong>主轴的排序方式</strong></td></tr><tr><td><strong>crossAxisAlignment</strong></td><td><strong>次轴的排序方式</strong></td></tr><tr><td><strong>children</strong></td><td><strong>组件子元素</strong></td></tr></tbody></table><h2 id="double-infinity-和-double-maxfinite" tabindex="-1">double.infinity 和 double.maxFinite <a class="header-anchor" href="#double-infinity-和-double-maxfinite" aria-label="Permalink to &quot;double.infinity 和 double.maxFinite&quot;">​</a></h2><p><strong>double.infinity 和 double.maxFinited 都可以让当前元素的 width 或者 height 达到父元素的尺寸</strong></p><p><strong>底层代码</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static const double nan = 0.0 / 0.0</span></span>
<span class="line"><span>static const double infinity = 1.0 / 0.0</span></span>
<span class="line"><span>static const double negativeInfinity = -infinity</span></span>
<span class="line"><span>static const double minPositive = 5e-324</span></span>
<span class="line"><span>static const double maxfinite= 1.7976931348623157e+308</span></span></code></pre></div><h2 id="flex-expanded" tabindex="-1">Flex Expanded <a class="header-anchor" href="#flex-expanded" aria-label="Permalink to &quot;Flex Expanded&quot;">​</a></h2><p>**Flex 组件可以沿着水平或垂直方向排列子组件，如果你知道主轴方向，使用 Row 或 column 会方便些，因为 **<code>Row</code>和 <code>Column</code>都继承自 <code>Flex</code>，参数基本相同，所以能使用 Flex 的地方基本上都可以使用 Row 或 Column。Flex 本身功能是很强大的，它也可以和 Expanded 组件配合实现弹性布局。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyFlex extends StatelessWidget {</span></span>
<span class="line"><span>  const MyFlex({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Flex(</span></span>
<span class="line"><span>      direction: Axis.horizontal,</span></span>
<span class="line"><span>      children: [</span></span>
<span class="line"><span>        Expanded(</span></span>
<span class="line"><span>            flex: 1,</span></span>
<span class="line"><span>            child: Container(</span></span>
<span class="line"><span>              height: 50,</span></span>
<span class="line"><span>              color: Colors.red,</span></span>
<span class="line"><span>            )),</span></span>
<span class="line"><span>        Expanded(</span></span>
<span class="line"><span>            flex: 2,</span></span>
<span class="line"><span>            child: Container(</span></span>
<span class="line"><span>              height: 50,</span></span>
<span class="line"><span>              color: Colors.blue,</span></span>
<span class="line"><span>            )),</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="stack" tabindex="-1">Stack <a class="header-anchor" href="#stack" aria-label="Permalink to &quot;Stack&quot;">​</a></h2><p><strong>Stack 表示堆的意思，我们可以用 Stack 或者 Stack 结合 Align 或者 Stack 结合 Positioned 来实现页面的定位布局</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>alignment</strong></td><td><strong>配置所有子元素的显示位置</strong></td></tr><tr><td><strong>children</strong></td><td><strong>子组件</strong></td></tr></tbody></table><h2 id="positioned" tabindex="-1">Positioned <a class="header-anchor" href="#positioned" aria-label="Permalink to &quot;Positioned&quot;">​</a></h2><p><strong>Stack 组件中结合 Positioned 组件也可以控制每个子元素的显示位置</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>top</strong></td><td><strong>子元素距离顶部的距离</strong></td></tr><tr><td><strong>bottom</strong></td><td><strong>子元素距离底部的距离</strong></td></tr><tr><td><strong>left</strong></td><td><strong>子元素距离左侧的距离</strong></td></tr><tr><td><strong>right</strong></td><td><strong>子元素距离右侧的距离</strong></td></tr><tr><td><strong>child</strong></td><td><strong>子组件</strong></td></tr><tr><td><strong>width</strong></td><td><strong>组件的高度（必须是固定值，没法使用 double.infinity）</strong></td></tr><tr><td><strong>height</strong></td><td><strong>组件的宽度（必须是固定值，没法使用 double.infinity）</strong></td></tr></tbody></table><blockquote><p><code>MediaQuery.of(context).size</code>可以获取设备的高度和宽度</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyStack extends StatelessWidget {</span></span>
<span class="line"><span>  const MyStack({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Container(</span></span>
<span class="line"><span>      height: 400,</span></span>
<span class="line"><span>      width: 300,</span></span>
<span class="line"><span>      color: Colors.yellow,</span></span>
<span class="line"><span>      child: Stack(</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          Positioned(</span></span>
<span class="line"><span>              left: 10,</span></span>
<span class="line"><span>              top: 10,</span></span>
<span class="line"><span>              child: Container(</span></span>
<span class="line"><span>                height: 100,</span></span>
<span class="line"><span>                width: 100,</span></span>
<span class="line"><span>                color: Colors.red,</span></span>
<span class="line"><span>              )),</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="align" tabindex="-1">Align <a class="header-anchor" href="#align" aria-label="Permalink to &quot;Align&quot;">​</a></h2><p><strong>Align 组件可以调整子组件的位置，Stack 组件中结合 Align 组件也可以控制每个子元素的显示位置</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>alignment</strong></td><td><strong>配置所有子元素的显示位置</strong></td></tr><tr><td><strong>child</strong></td><td><strong>子组件</strong></td></tr></tbody></table><h2 id="aspectratio" tabindex="-1">AspectRatio <a class="header-anchor" href="#aspectratio" aria-label="Permalink to &quot;AspectRatio&quot;">​</a></h2><p><strong>AspectRatio 的作用是根据设置调整子元素的宽高比</strong></p><p><strong>AspectRatio 首先会在布局限制条件允许的范围内尽可能的扩展，widget 的高度是由宽度和比率决定的，类似于 BoxFit 中的 contain，按照固定比率去尽量占满区域</strong></p><p><strong>如果在满足所有限制条件过后无法找到一个可行的尺寸，AspectRatio 最终将会优先适应布局限制条件，而忽略所设置的比率</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>aspectRatio</strong></td><td><strong>宽高比，最终可能不会根据这个值去布局，具体则要看综合因素，外层是否允许按照这种比率进行布局，这只是一个参考值</strong></td></tr><tr><td><strong>child</strong></td><td><strong>子组件</strong></td></tr></tbody></table><h2 id="card" tabindex="-1">Card <a class="header-anchor" href="#card" aria-label="Permalink to &quot;Card&quot;">​</a></h2><p><strong>Card 是卡片组件块，内容可以由大多数类型的 Widget 构成，Card 具有园角和阴影，这让它看起来有立体感</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>margin</strong></td><td><strong>外边距</strong></td></tr><tr><td><strong>child</strong></td><td><strong>子组件</strong></td></tr><tr><td><strong>elevation</strong></td><td><strong>阴影值的深度</strong></td></tr><tr><td><strong>color</strong></td><td><strong>背景颜色</strong></td></tr><tr><td><strong>shadowColor</strong></td><td><strong>阴影颜色</strong></td></tr><tr><td><strong>margin</strong></td><td><strong>外边距</strong></td></tr><tr><td><strong>clipBehavior</strong></td><td><strong>内容溢出的剪切方式</strong></td></tr><tr><td><strong>Shape</strong></td><td><strong>Card 的阴影效果，默认的阴影效果为圆角的长方形边</strong></td></tr></tbody></table><h3 id="clipbehavior" tabindex="-1">clipBehavior <a class="header-anchor" href="#clipbehavior" aria-label="Permalink to &quot;clipBehavior&quot;">​</a></h3><p><code>Clip.none</code> 不剪切</p><p><code>Clip.hardEdge</code> 裁剪但不应用抗锯齿</p><p><code>Clip.antAlias</code> 裁剪而且抗锯齿</p><p><code>Clip.antiAliasWithSaveLayer</code> 带有抗锯齿的剪辑，并在剪辑之后立即保存 saveLayer</p><h2 id="circleavatar" tabindex="-1">CircleAvatar <a class="header-anchor" href="#circleavatar" aria-label="Permalink to &quot;CircleAvatar&quot;">​</a></h2><p><strong>头像</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const circleAvatar(</span></span>
<span class="line"><span>radius: 200,</span></span>
<span class="line"><span>    backgroundImage: Image.network()</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="按钮组件" tabindex="-1">按钮组件 <a class="header-anchor" href="#按钮组件" aria-label="Permalink to &quot;按钮组件&quot;">​</a></h2><p><strong>按钮组件的属性</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>onPressed</strong></td><td><strong>必填参数，按下按钮时出发的回调，接收一个方法，传 null 表示按钮禁用，会显示禁用相关样式</strong></td></tr><tr><td><strong>child</strong></td><td><strong>子组件</strong></td></tr><tr><td><strong>style</strong></td><td><strong>通过 ButtonStyle 装饰</strong></td></tr></tbody></table><p><strong>自定义大小</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SizeBox(</span></span>
<span class="line"><span>width:200,</span></span>
<span class="line"><span>    height:100,</span></span>
<span class="line"><span>    children: ElevatedButton(</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>)</span></span></code></pre></div><p><strong>圆角</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>style: ButtonStyle(</span></span>
<span class="line"><span>shape: MaterialStateProperty.all(</span></span>
<span class="line"><span>    RoundedRectangleBorder(</span></span>
<span class="line"><span>        borderRadius.: BorderRadius.circular(20)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>)</span></span></code></pre></div><p><strong>修改边框颜色</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>OutlinedButton(</span></span>
<span class="line"><span>style: ButtonStyle(</span></span>
<span class="line"><span>    side: MaterialStateProperty.all(</span></span>
<span class="line"><span>        const BorderSide(width:1,color: Colors.red)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="elevatedbutton" tabindex="-1">ElevatedButton <a class="header-anchor" href="#elevatedbutton" aria-label="Permalink to &quot;ElevatedButton&quot;">​</a></h2><p><strong>普通按钮</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ElevatedButton.icon(</span></span>
<span class="line"><span>    icon: const Icon(Icons.home),</span></span>
<span class="line"><span>    label: const Text(&quot;Home&quot;),</span></span>
<span class="line"><span>    onPressed: () {},</span></span>
<span class="line"><span>),</span></span></code></pre></div><h2 id="textbutton" tabindex="-1">TextButton <a class="header-anchor" href="#textbutton" aria-label="Permalink to &quot;TextButton&quot;">​</a></h2><p><strong>文本按钮</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>TextButton.icon(</span></span>
<span class="line"><span>    icon: const Icon(Icons.home),</span></span>
<span class="line"><span>    label: const Text(&quot;Home&quot;),</span></span>
<span class="line"><span>    onPressed: () {},</span></span>
<span class="line"><span>),</span></span></code></pre></div><h2 id="outlinedbutton" tabindex="-1">OutlinedButton <a class="header-anchor" href="#outlinedbutton" aria-label="Permalink to &quot;OutlinedButton&quot;">​</a></h2><p><strong>边框按钮</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>OutlinedButton.icon(</span></span>
<span class="line"><span>    icon: const Icon(Icons.home),</span></span>
<span class="line"><span>    label: const Text(&quot;Home&quot;),</span></span>
<span class="line"><span>    onPressed: () {},</span></span>
<span class="line"><span>),</span></span></code></pre></div><h2 id="iconbutton" tabindex="-1">IconButton <a class="header-anchor" href="#iconbutton" aria-label="Permalink to &quot;IconButton&quot;">​</a></h2><p><strong>图标按钮</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>IconButton.icon(</span></span>
<span class="line"><span>    icon: const Icon(Icons.home),</span></span>
<span class="line"><span>    label: const Text(&quot;Home&quot;),</span></span>
<span class="line"><span>    onPressed: () {},</span></span>
<span class="line"><span>),</span></span></code></pre></div><h2 id="warp" tabindex="-1">Warp <a class="header-anchor" href="#warp" aria-label="Permalink to &quot;Warp&quot;">​</a></h2><p><strong>Wrap 可以实现流布局，单行的 Wrap 跟 Row 表现几乎致，单列的 Wrap 则跟 Row 表现几乎一致。但 Row 与 Column 都是单行单列的，Wrap 则突破了这个限制，mainAxis 上空间不足时，则向 crossAxis 上去扩展显示，</strong></p><table><thead><tr><th><strong>属性</strong></th><th></th></tr></thead><tbody><tr><td><strong>direction</strong></td><td><strong>主轴的方向，默认水平</strong></td></tr><tr><td><strong>alignment</strong></td><td><strong>主轴的对齐方式</strong></td></tr><tr><td><strong>spacing</strong></td><td><strong>主轴方向上的间距</strong></td></tr><tr><td><strong>textDirection</strong></td><td><strong>文本方向</strong></td></tr><tr><td><strong>verticalDirection</strong></td><td><strong>定义了 children 摆放顺序，默认是 down，见 Flex 相关属性介绍</strong></td></tr><tr><td><strong>runAlignment</strong></td><td><strong>run 的对齐方式，run 可以理解为新的行或者列，如果是水平方向布局的话，run 可以理解为新的一行</strong></td></tr><tr><td><strong>runSpacing</strong></td><td><strong>run 的间距</strong></td></tr></tbody></table><h2 id="bottomnavigationbar" tabindex="-1">BottomNavigationBar <a class="header-anchor" href="#bottomnavigationbar" aria-label="Permalink to &quot;BottomNavigationBar&quot;">​</a></h2><p><strong>BottomNavigationBar 是底部导航条，可以让我们定义底部 Tab 切换，bottomNavigationBar 是 Scaffold 组件的参数</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>items</strong></td><td><strong>List 底部导航条按钮集合</strong></td></tr><tr><td><strong>iconSize</strong></td><td><strong>icon</strong></td></tr><tr><td><strong>currentIndex</strong></td><td><strong>默认选中第几个</strong></td></tr><tr><td><strong>onTap</strong></td><td><strong>选中变化回调函数</strong></td></tr><tr><td><strong>fixedColor</strong></td><td><strong>选中的颜色</strong></td></tr><tr><td><strong>type</strong></td><td><strong>BottomNavigationbarType.fixed （四个及以上必须设置该属性）</strong> <strong>BottomNavigationbarType.shifting</strong></td></tr></tbody></table><h2 id="drawer" tabindex="-1">Drawer <a class="header-anchor" href="#drawer" aria-label="Permalink to &quot;Drawer&quot;">​</a></h2><p><strong>在 Scaffold 组件里面传入 drawer 参数可以定义左侧边栏，传入 endDraweri 可以定义右侧边栏，侧边栏默认是隐藏的，我们可以通过手指滑动显示侧边栏，也可以通过点击按钮显示侧边栏。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>return Scaffold(</span></span>
<span class="line"><span>drawer: Drawer(</span></span>
<span class="line"><span>    child: Text(&#39;左侧边栏&#39;);</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    endDrawer: Drawer(</span></span>
<span class="line"><span>    child: Text(&#39;右侧边栏&#39;);</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="drawerheader" tabindex="-1">DrawerHeader <a class="header-anchor" href="#drawerheader" aria-label="Permalink to &quot;DrawerHeader&quot;">​</a></h2><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>decoration</strong></td><td><strong>设置顶部背景颜色</strong></td></tr><tr><td><strong>child</strong></td><td><strong>配置子元素</strong></td></tr><tr><td><strong>padding</strong></td><td><strong>内边距</strong></td></tr><tr><td><strong>margin</strong></td><td><strong>外边距</strong></td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>drawer: Drawer(</span></span>
<span class="line"><span>        child: ListView(</span></span>
<span class="line"><span>        children: const [</span></span>
<span class="line"><span>          DrawerHeader(</span></span>
<span class="line"><span>            decoration: BoxDecoration(color: Colors.blue),</span></span>
<span class="line"><span>            child: Center(</span></span>
<span class="line"><span>              child: Text(</span></span>
<span class="line"><span>                &quot;Hello World&quot;,</span></span>
<span class="line"><span>                style: TextStyle(color: Colors.white, fontSize: 20),</span></span>
<span class="line"><span>              ),</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        ListTile(</span></span>
<span class="line"><span>          leading: Icon(Icons.home),</span></span>
<span class="line"><span>          title: Text(&quot;Home&quot;),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    ))</span></span></code></pre></div><h2 id="useraccountsdrawerheader" tabindex="-1">UserAccountsDrawerHeader <a class="header-anchor" href="#useraccountsdrawerheader" aria-label="Permalink to &quot;UserAccountsDrawerHeader&quot;">​</a></h2><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>decoration</strong></td><td><strong>设置外部背景颜色</strong></td></tr><tr><td><strong>accountName</strong></td><td><strong>账户名称</strong></td></tr><tr><td><strong>accountEmail</strong></td><td><strong>账户邮箱</strong></td></tr><tr><td><strong>currentAccountPicture</strong></td><td><strong>用户头像</strong></td></tr><tr><td><strong>otherAccountsPictures</strong></td><td><strong>用来设置当前账户其他账户头像</strong></td></tr><tr><td><strong>margin</strong></td><td><strong>外边距</strong></td></tr></tbody></table><h2 id="appbar" tabindex="-1">AppBar <a class="header-anchor" href="#appbar" aria-label="Permalink to &quot;AppBar&quot;">​</a></h2><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>leading</strong></td><td><strong>在标题前面显示的一个控件，在首页通常显示应用的 logo；在其他界面通常显示为返回按钮</strong></td></tr><tr><td><strong>title</strong></td><td><strong>标题，通常显示为当前界面的标题文字，可以放组件</strong></td></tr><tr><td><strong>actions</strong></td><td><strong>通常使用 IconButton 来表示，可以放按钮组</strong></td></tr><tr><td><strong>bottom</strong></td><td><strong>通常放 tabBar，标题下面显示一个 tab 导航栏</strong></td></tr><tr><td><strong>backgroundColor</strong></td><td><strong>导航背景颜色</strong></td></tr><tr><td><strong>iconTheme</strong></td><td><strong>图标样式</strong></td></tr><tr><td><strong>centerTitle</strong></td><td><strong>标题是否居中显示</strong></td></tr></tbody></table><h2 id="tabbar" tabindex="-1">TabBar <a class="header-anchor" href="#tabbar" aria-label="Permalink to &quot;TabBar&quot;">​</a></h2><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>tabs</strong></td><td><strong>显示的标签内容，一般使用 Tab 对象，也可以是其他的 Widget</strong></td></tr><tr><td><strong>controller</strong></td><td><strong>TabController 对象</strong></td></tr><tr><td><strong>isScrollable</strong></td><td><strong>是否可滚动</strong></td></tr><tr><td><strong>indicatorColor</strong></td><td><strong>指示器颜色</strong></td></tr><tr><td><strong>indicatorWeight</strong></td><td><strong>指示器高度</strong></td></tr><tr><td><strong>indicatorPadding</strong></td><td><strong>底部指示器的 Padding</strong></td></tr><tr><td><strong>indicator</strong></td><td><strong>指示器，如边框等</strong></td></tr><tr><td><strong>indicatorSize</strong></td><td><strong>指示器大小计算方式</strong> <code>TabBarIndicatorSize.label</code>跟文字等宽 <code>TabBarIndicatorSize.tab</code>跟每个 tab 等宽</td></tr><tr><td><strong>labelColor</strong></td><td><strong>选中 label 颜色</strong></td></tr><tr><td><strong>labelStyle</strong></td><td><strong>选中 label 的 Style</strong></td></tr><tr><td><strong>labelPadding</strong></td><td><strong>每个 label 的 padding 值</strong></td></tr><tr><td><strong>unselectedLabelColor</strong></td><td><strong>未选中 label 颜色</strong></td></tr><tr><td><strong>unselectedLabelStyle</strong></td><td><strong>未选中 label 的 Style</strong></td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyTabBar extends StatefulWidget {</span></span>
<span class="line"><span>  const MyTabBar({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  State&lt;MyTabBar&gt; createState() =&gt; _MyTabBarState();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class _MyTabBarState extends State&lt;MyTabBar&gt;</span></span>
<span class="line"><span>    with SingleTickerProviderStateMixin { // 重点</span></span>
<span class="line"><span>  late TabController _tabController; // 重点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 生命周期</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  void initState() { // 重点</span></span>
<span class="line"><span>    super.initState();</span></span>
<span class="line"><span>    _tabController = TabController(length: 3, vsync: this);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      appBar: AppBar(</span></span>
<span class="line"><span>          title: const Text(&quot;My TabBar&quot;),</span></span>
<span class="line"><span>          bottom: TabBar( //重点</span></span>
<span class="line"><span>            controller: _tabController,</span></span>
<span class="line"><span>            tabs: const [</span></span>
<span class="line"><span>              Tab(icon: Icon(Icons.home), text: &quot;Home&quot;),</span></span>
<span class="line"><span>              Tab(icon: Icon(Icons.tv), text: &quot;TV&quot;),</span></span>
<span class="line"><span>              Tab(icon: Icon(Icons.movie), text: &quot;Movie&quot;),</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          )),</span></span>
<span class="line"><span>      body: TabBarView( // 重点</span></span>
<span class="line"><span>        controller: _tabController,</span></span>
<span class="line"><span>        children: const [</span></span>
<span class="line"><span>          Center(child: Text(&quot;Home&quot;)),</span></span>
<span class="line"><span>          Center(child: Text(&quot;TV&quot;)),</span></span>
<span class="line"><span>          Center(child: Text(&quot;Movie&quot;)),</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="tabbarview" tabindex="-1">TabBarView <a class="header-anchor" href="#tabbarview" aria-label="Permalink to &quot;TabBarView&quot;">​</a></h2><table><thead><tr><th><strong>属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><strong>controller</strong></td><td><strong>TabController 对象</strong></td></tr><tr><td><strong>children</strong></td><td><strong>子对象</strong></td></tr></tbody></table><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h2><p><strong>Flutter 中的路由通俗的讲就是页面跳转。在 Flutter 中通过 Navigator 组件管理路由导航。并提供了管理堆栈的方法。如：</strong><code>Navigator.push</code>和 <code>Navigator.pop</code></p><h3 id="基本路由" tabindex="-1">基本路由 <a class="header-anchor" href="#基本路由" aria-label="Permalink to &quot;基本路由&quot;">​</a></h3><p><strong>场景：从 HomePage 组件跳转到 SearchPage 组件</strong></p><ol><li><strong>在 HomePage 中引入 SearchPage.dart</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;../SearchPage.dart&#39;</span></span></code></pre></div></li><li><strong>在 HomePage 中通过下面方法跳转</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Center(</span></span>
<span class="line"><span>child: ElevatedButton(onPressed:(){</span></span>
<span class="line"><span>        Navigator.of(context).push(</span></span>
<span class="line"><span>        MaterialPageRoute(builder: (context){</span></span>
<span class="line"><span>                return const SearchPage();</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },child: const Text(&quot;跳转到搜索页面&quot;))，</span></span>
<span class="line"><span>)</span></span></code></pre></div></li></ol><p><strong>跳转传值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//</span></span>
<span class="line"><span>Navigator.of(context).push(</span></span>
<span class="line"><span>    MaterialPageRoute(builder: (context){</span></span>
<span class="line"><span>        return const SearchPage(title:&quot;Str&quot;);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>class SearchPage extends Statefulwidget {</span></span>
<span class="line"><span>    final String title;</span></span>
<span class="line"><span>    const searchPage({super.key,this.title=&quot;Search Page&quot;});</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="命名路由" tabindex="-1">命名路由 <a class="header-anchor" href="#命名路由" aria-label="Permalink to &quot;命名路由&quot;">​</a></h3><ol><li><strong>在 main.dart 中配置路由</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;./pages/search.dart&#39;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>void main() {</span></span>
<span class="line"><span>  runApp(const MaterialApp(</span></span>
<span class="line"><span>    initialRoute: &#39;/&#39;, // 初始化路由</span></span>
<span class="line"><span>    routes: {</span></span>
<span class="line"><span>      &quot;/&quot;: (context) =&gt; const MyTabBar(),</span></span>
<span class="line"><span>      &quot;/setting&quot;: (context) =&gt; const SettingPage(),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ));</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><strong>跳转路由</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Navigator.pushNamed(context, &#39;/setting&#39;);</span></span></code></pre></div></li></ol><p><strong>跳转传值</strong></p><ol><li><strong>定义路由</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Map routes = {</span></span>
<span class="line"><span>    &quot;/&quot;: (context) =&gt; const MyTabBar(),</span></span>
<span class="line"><span>    &quot;/setting&quot;: (context,arguments) =&gt; const SettingPage(arguments:&quot;arguments&quot;),</span></span>
<span class="line"><span>};</span></span></code></pre></div></li><li><strong>配置 onGenerateRoute</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>onGenerateRoute: (RouteSettings settings) {</span></span>
<span class="line"><span>    final String? name = settings.name;</span></span>
<span class="line"><span>    final Function pageContentBuilder = routes[name];</span></span>
<span class="line"><span>    if (pageContentBuilder != null) {</span></span>
<span class="line"><span>        if (settings.arguments != null) {</span></span>
<span class="line"><span>            final Route route = MaterialPageRoute(</span></span>
<span class="line"><span>                builder: (context) =&gt;</span></span>
<span class="line"><span>                pageContentBuilder(context, arguments: settings.arguments));</span></span>
<span class="line"><span>            return route;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            final Route route = MaterialPageRoute(</span></span>
<span class="line"><span>                builder: (context) =&gt; pageContentBuilder(context));</span></span>
<span class="line"><span>            return route;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><strong>发送参数</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Navigator.pushNamed(context, &#39;/setting&#39;,arguements:{</span></span>
<span class="line"><span>    &quot;title&quot;:&quot;home&quot;</span></span>
<span class="line"><span>});</span></span></code></pre></div></li><li><strong>接收参数</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class SettingPage extends StatefulWidget {</span></span>
<span class="line"><span>    final Map arguments;</span></span>
<span class="line"><span> const SettingPage({super.key,required this.arguments});</span></span>
<span class="line"><span> ...</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><p><strong>封装</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- lib</span></span>
<span class="line"><span>- routes</span></span>
<span class="line"><span>- routes.dart</span></span></code></pre></div><p><strong>routes.dart</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;../setting.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var routes = {</span></span>
<span class="line"><span>  &#39;/&#39;: (context) =&gt; const MyTabBar(),</span></span>
<span class="line"><span>  &#39;/setting&#39;: (context) =&gt; const SettingPage(),</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var onGenerateRoute = (RouteSettings settings) {</span></span>
<span class="line"><span>  // 统一处理</span></span>
<span class="line"><span>  final String? name = settings.name;</span></span>
<span class="line"><span>  final Function? pageContentBuilder = routes[name];</span></span>
<span class="line"><span>  if (pageContentBuilder != null) {</span></span>
<span class="line"><span>    if (settings.arguments != null) {</span></span>
<span class="line"><span>      final Route route = MaterialPageRoute(</span></span>
<span class="line"><span>          builder: (context) =&gt;</span></span>
<span class="line"><span>              pageContentBuilder(context, arguments: settings.arguments));</span></span>
<span class="line"><span>      return route;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      final Route route =</span></span>
<span class="line"><span>          MaterialPageRoute(builder: (context) =&gt; pageContentBuilder(context));</span></span>
<span class="line"><span>      return route;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="返回上一级路由" tabindex="-1">返回上一级路由 <a class="header-anchor" href="#返回上一级路由" aria-label="Permalink to &quot;返回上一级路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Navigator.of(context).pop();</span></span></code></pre></div><h3 id="替换路由" tabindex="-1">替换路由 <a class="header-anchor" href="#替换路由" aria-label="Permalink to &quot;替换路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Navigator.of(context).pushReplacementNamed(&#39;/registerSecond&#39;);</span></span></code></pre></div><h3 id="返回到根路由" tabindex="-1">返回到根路由 <a class="header-anchor" href="#返回到根路由" aria-label="Permalink to &quot;返回到根路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Navigator.of(context).pushAndRemoveUntil(</span></span>
<span class="line"><span>MaterialPageRoute(</span></span>
<span class="line"><span>        builder: (BuildContext context ) {</span></span>
<span class="line"><span>        return const Tabs();</span></span>
<span class="line"><span>    }),(route) =&gt; false);</span></span></code></pre></div><h2 id="alertdialog" tabindex="-1">AlertDialog <a class="header-anchor" href="#alertdialog" aria-label="Permalink to &quot;AlertDialog&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>void _alertDialog() async {</span></span>
<span class="line"><span>    var result = await showDialog(context: context, builder: (context){</span></span>
<span class="line"><span>        return AlertDialog(</span></span>
<span class="line"><span>            title:const Text(&quot;提示信息&quot;),</span></span>
<span class="line"><span>            content: const Text(&quot;您确定要删除吗&quot;),</span></span>
<span class="line"><span>            actions: [</span></span>
<span class="line"><span>                TextButton(onPressed:(){</span></span>
<span class="line"><span>                    printf(&quot;ok&quot;);</span></span>
<span class="line"><span>                    Navigator.of(context).pop(&quot;ok&quot;); //点击按钮让AlertDialog消失</span></span>
<span class="line"><span>                }),child: const Text(&#39;确定&#39;)),</span></span>
<span class="line"><span>                TextButton(onPressed:(){</span></span>
<span class="line"><span>                    printf(&quot;cancel&quot;);</span></span>
<span class="line"><span>                    Navigator.of(context).pop(&quot;cancel&quot;); //点击按钮让AlertDialog消失</span></span>
<span class="line"><span>                }),child: const Text(&#39;取消&#39;))</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    print(result) // 获取pop返回的值</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="simpledialog" tabindex="-1">SImpleDialog <a class="header-anchor" href="#simpledialog" aria-label="Permalink to &quot;SImpleDialog&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>void _simpleDialog() async{</span></span>
<span class="line"><span>var result = await showDialog(</span></span>
<span class="line"><span>        barrierDismissible: true, // 点击灰色背景的时候是否消失弹出框</span></span>
<span class="line"><span>        context: context,</span></span>
<span class="line"><span>        builder: (conntext){</span></span>
<span class="line"><span>            return SimpleDialog(</span></span>
<span class="line"><span>                title: const Text(&quot;请选择语言&quot;),</span></span>
<span class="line"><span>                children: [</span></span>
<span class="line"><span>                    SimpleDialogOption(</span></span>
<span class="line"><span>                        child: const Text(&quot;汉语&quot;),</span></span>
<span class="line"><span>                        onPressed: ()</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                    SimpleDialogOption(</span></span>
<span class="line"><span>                        child: const Text(&quot;汉语&quot;),</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="showmodalbottomsheet" tabindex="-1">showModalBottomSheet() <a class="header-anchor" href="#showmodalbottomsheet" aria-label="Permalink to &quot;showModalBottomSheet()&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>void _modelBottomSheet() {</span></span>
<span class="line"><span>showModalBottomSheet(</span></span>
<span class="line"><span>        context: context,</span></span>
<span class="line"><span>        builder: (context){</span></span>
<span class="line"><span>            return Container(</span></span>
<span class="line"><span>            child: Column(</span></span>
<span class="line"><span>                children: [</span></span>
<span class="line"><span>                        ListTile(</span></span>
<span class="line"><span>                        title: Text(&quot;&quot;),</span></span>
<span class="line"><span>                            onTap：(){</span></span>
<span class="line"><span>navigator.of(context).pop();</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        ),</span></span>
<span class="line"><span>                        ListTile(</span></span>
<span class="line"><span>                        title: Text(&quot;&quot;),</span></span>
<span class="line"><span>                            onTap：(){</span></span>
<span class="line"><span>navigator.of(context).pop();</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        ),</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="自定义-dialog" tabindex="-1">自定义 Dialog <a class="header-anchor" href="#自定义-dialog" aria-label="Permalink to &quot;自定义 Dialog&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class MyDialog extends Dialog {</span></span>
<span class="line"><span>  const MyDialog({super.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Material(</span></span>
<span class="line"><span>      type: MaterialType.transparency,</span></span>
<span class="line"><span>      child: Center(</span></span>
<span class="line"><span>          child: Container(</span></span>
<span class="line"><span>        height: 200,</span></span>
<span class="line"><span>        width: 200,</span></span>
<span class="line"><span>        color: Colors.white,</span></span>
<span class="line"><span>        child: const Center(</span></span>
<span class="line"><span>          child: Text(&quot;Hello&quot;),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      )),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="pageview" tabindex="-1">PageView <a class="header-anchor" href="#pageview" aria-label="Permalink to &quot;PageView&quot;">​</a></h2><p><strong>Flutter 中的轮动图以及抖音上下划页切换视频功能等等，都可以通过 PageView 轻松实现</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>scrollDirection</strong></td><td><strong>Axis.horizonta 水平方向</strong> <strong>Axis.vertical 垂直方向</strong></td></tr><tr><td><strong>children</strong></td><td><strong>配置子元素</strong></td></tr><tr><td><strong>allowImplicitScrolling</strong></td><td><strong>缓存当前页面的前后两页</strong></td></tr><tr><td><strong>onPageChanged</strong></td><td><strong>page 改变的时候触发</strong></td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>return PageView(</span></span>
<span class="line"><span>children: [</span></span>
<span class="line"><span>        Center(</span></span>
<span class="line"><span>        child: Text(&#39;1&#39;)</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        Center(</span></span>
<span class="line"><span>        child: Text(&#39;1&#39;)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//PageView.builder()</span></span>
<span class="line"><span>return PageView.builder(</span></span>
<span class="line"><span>itemCount: 10,</span></span>
<span class="line"><span>    itemBuilder: (context,index){</span></span>
<span class="line"><span>        return Center(</span></span>
<span class="line"><span>        child: Text(&quot;$index&quot;);</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p><strong>跳转</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义</span></span>
<span class="line"><span>late Pagecontroller _pageControlller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@override</span></span>
<span class="line"><span>void initState() {</span></span>
<span class="line"><span>    _pageControlller = PageController(initialPage: 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 配置</span></span>
<span class="line"><span>PageView.builder(</span></span>
<span class="line"><span>controller: _pageController,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>_pageControlller.animateToPage(page,duration: Duration(millisecondes: 200,curve: Curves.linear));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 销毁</span></span>
<span class="line"><span>@override</span></span>
<span class="line"><span>void dispose() {</span></span>
<span class="line"><span>    _pageControlller.dispose();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>缓存</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class _MyContainerState extends State&lt;MyContainer&gt; with AutomaticKeepAliveClientMixin {</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>    @override</span></span>
<span class="line"><span>    bool get wantkeepAlive =&gt; true;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Timer t = Timer.periodic(const Duration(seconds: 3), (timer) {</span></span>
<span class="line"><span>print(&quot;run&quot;);</span></span>
<span class="line"><span>    // timer.cancel();  // 取消定时器</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>t.cancel(); // 取消定时器</span></span></code></pre></div><p><strong>组件销毁的时候取消定时器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>void dispose() {</span></span>
<span class="line"><span>super.dispose();</span></span>
<span class="line"><span>    t.cancel;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="key" tabindex="-1">Key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;Key&quot;">​</a></h2><p><strong>在 Flutter 中，Key 是不能重复使用的，所以 key 一般用来做唯一标识。组件在更新的时候，其状态的保存主要是通过判断组件的类型或者 key 值是否一致，因此，当各组件的类型不同的时候，类型已经足够用来区分不同的组件了，此时可以不必使用 key，但是如果同时存在多个同一类型的控件的时候，此时类型已经无法作为区分条件了，我们就需要使用到 key。</strong></p><p><strong>Flutter key 子类包含</strong> <code>localKey</code>和 <code>GlobalKey</code></p><ul><li><p><strong>局部键（LocalKey）：ValueKey、ObjectKey、UniqueKey</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Container(</span></span>
<span class="line"><span>key: ValueKey(&#39;1&#39;),</span></span>
<span class="line"><span>)</span></span></code></pre></div></li><li><p><strong>全局键（GlobalKey）：GlobalKey、GlobalObjectKey</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>final GlobalKey _globalKey = GlobalKey();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取子组件的属性</span></span>
<span class="line"><span>var boxState = _globalKey.currentState as _BoxState;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用子组件的方法</span></span>
<span class="line"><span>boxState.run();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取子组件</span></span>
<span class="line"><span>var boxWidget = _globalKey.currentWidget as Box;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取子组件渲染的属性</span></span>
<span class="line"><span>var renderBox= _globalKeu.currentContext!.findRenderObject() as RenderBox</span></span></code></pre></div></li></ul><h2 id="animatedlist" tabindex="-1">AnimatedList <a class="header-anchor" href="#animatedlist" aria-label="Permalink to &quot;AnimatedList&quot;">​</a></h2><p><strong>AnimatedList 和 ListView 的功能大体相似，不同的是，AnimatedList 可以在列表中插入或删除节点时执行一个动画，在需要添加或删除列表项的场景中会提高用户体验</strong></p><p><strong>AnimatedList 是一个 Statefulwidget，它对应的 State 类型为 AnimatedListState，添加和删除元素的方法位于 AnimatedListState 中</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>void insertItem(int index, { Duration duration = _kDuration });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void removeItem(int index, AnimatedListRemoveItemBuilder builder, { Duration duration = _kDuration });</span></span></code></pre></div><p><strong>属性</strong></p><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>key</strong></td><td><strong>globalKey final globalKey = GlobalKey();</strong></td></tr><tr><td><strong>initialItemCount</strong></td><td><strong>子元素数量</strong></td></tr><tr><td><strong>itemBUilder</strong></td><td><strong>方法( BuildContext context,int index, Animation animation) {}</strong></td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>...</span></span>
<span class="line"><span>final _globalKey = GlobalKey&lt;AnimatedListState&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>_globalKey.currentState!.insertItem(list.length - 1);</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>AnimatedList(</span></span>
<span class="line"><span>    key: _globalKey,</span></span>
<span class="line"><span>initialItemCount: list.length,</span></span>
<span class="line"><span>    itemBuilder: ((context, index, animation) {</span></span>
<span class="line"><span>        return FadeTransition(</span></span>
<span class="line"><span>        opacity: animation,</span></span>
<span class="line"><span>            child: ListTile(</span></span>
<span class="line"><span>            title: Text(list[index])</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h2><h3 id="隐式动画" tabindex="-1">隐式动画 <a class="header-anchor" href="#隐式动画" aria-label="Permalink to &quot;隐式动画&quot;">​</a></h3><p><strong>通过几行代码就可以实现隐式动画，由于隐式动画背后的实现原理和繁琐的操作细节都被隐去了，所以叫隐式动画，Flutter 中提供的 AnimatedContainer、AnimatedPadding、AnimatedPositioned,AnimatedOpacity、AnimatedDefaultTextStyle、AnimatedSwitcher 都属于隐式动画。</strong><strong>隐式动画中可以通过</strong> <code>duration</code>配置动画时长、可以通过 <code>Curve</code>(曲线)来配置动画过程</p><h4 id="animatedcontainer" tabindex="-1">AnimatedContainer <a class="header-anchor" href="#animatedcontainer" aria-label="Permalink to &quot;AnimatedContainer&quot;">​</a></h4><p><strong>AnimatedContainer 的属性和 Container.属性基本是一样的，当 AnimatedContainer 属性改变的时候就会触发动画。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AnimatedContainer(</span></span>
<span class="line"><span>duration: const Duration(seconds: 1,millliseconds: 100),</span></span>
<span class="line"><span>    width: flag?100:200,</span></span>
<span class="line"><span>    height: flag?100:200</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="animatedpadding" tabindex="-1">AnimatedPadding <a class="header-anchor" href="#animatedpadding" aria-label="Permalink to &quot;AnimatedPadding&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AnimatedPadding(</span></span>
<span class="line"><span>    curve: Curves.easeIn,</span></span>
<span class="line"><span>duration: const Duration(seconds: 1,millliseconds: 100),</span></span>
<span class="line"><span>    width: flag?100:200,</span></span>
<span class="line"><span>    height: flag?100:200</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="animatedopacity" tabindex="-1">AnimatedOpacity <a class="header-anchor" href="#animatedopacity" aria-label="Permalink to &quot;AnimatedOpacity&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AnimatedOpacity(</span></span>
<span class="line"><span>    opacity: flag?0.1:1</span></span>
<span class="line"><span>    curve: Curves.easeIn,</span></span>
<span class="line"><span>duration: const Duration(seconds: 1,millliseconds: 100),</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="animatedpositioned" tabindex="-1">AnimatedPositioned <a class="header-anchor" href="#animatedpositioned" aria-label="Permalink to &quot;AnimatedPositioned&quot;">​</a></h4><p><strong>同上</strong></p><h4 id="animatedpositioned-1" tabindex="-1">AnimatedPositioned <a class="header-anchor" href="#animatedpositioned-1" aria-label="Permalink to &quot;AnimatedPositioned&quot;">​</a></h4><p><strong>同上</strong></p><h4 id="animatedswitcher" tabindex="-1">AnimatedSwitcher <a class="header-anchor" href="#animatedswitcher" aria-label="Permalink to &quot;AnimatedSwitcher&quot;">​</a></h4><p><strong>当子元素改变的时候触发动画</strong></p><h3 id="显式动画" tabindex="-1">显式动画 <a class="header-anchor" href="#显式动画" aria-label="Permalink to &quot;显式动画&quot;">​</a></h3><p><strong>常见的显式动画有 RotationTransition、FadeTransition、ScaleTransition、SlideTransition.</strong><strong>Animatedlcon。在显示动画中开发者需要创建一个 AnimationController,.通过 AnimationController</strong><strong>控制动画的开始、暂停、重置、跳转、倒播等</strong></p><h2 id="getx" tabindex="-1">Getx <a class="header-anchor" href="#getx" aria-label="Permalink to &quot;Getx&quot;">​</a></h2><p><strong>Get 以是 Flutter.上的一个轻量且强大的解决方案，Gex 为我们提供了高性能的状态管理、智能的依赖注入和便捷的路由管理。</strong></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p><strong>将 Getx 添加到你的</strong> <code>pubspec.yaml</code>文件中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dependencies:</span></span>
<span class="line"><span>  get: version</span></span></code></pre></div><p><strong>在需要的文件中引入</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;package:get/get.dart&#39;;</span></span></code></pre></div><p><strong>修改应用顶层</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MaterialApp() -&gt; GetMaterialApp()</span></span></code></pre></div><h3 id="调用-dialog" tabindex="-1">调用 Dialog <a class="header-anchor" href="#调用-dialog" aria-label="Permalink to &quot;调用 Dialog&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.defaultDialog();</span></span></code></pre></div><h3 id="调用-snackbar" tabindex="-1">调用 Snackbar <a class="header-anchor" href="#调用-snackbar" aria-label="Permalink to &quot;调用 Snackbar&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.snackbar();</span></span></code></pre></div><h3 id="调用-bottomsheet" tabindex="-1">调用 BottomSheet <a class="header-anchor" href="#调用-bottomsheet" aria-label="Permalink to &quot;调用 BottomSheet&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.bottomSheet();</span></span></code></pre></div><h3 id="切换主题" tabindex="-1">切换主题 <a class="header-anchor" href="#切换主题" aria-label="Permalink to &quot;切换主题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.changeTheme(ThemeData.light());</span></span></code></pre></div><h3 id="路由管理" tabindex="-1">路由管理 <a class="header-anchor" href="#路由管理" aria-label="Permalink to &quot;路由管理&quot;">​</a></h3><h4 id="跳转路由" tabindex="-1">跳转路由 <a class="header-anchor" href="#跳转路由" aria-label="Permalink to &quot;跳转路由&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.toNamed();</span></span></code></pre></div><h4 id="替换路由-1" tabindex="-1">替换路由 <a class="header-anchor" href="#替换路由-1" aria-label="Permalink to &quot;替换路由&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.off(); // 进入下一个页面但没有返回上一个页面的选项</span></span></code></pre></div><h4 id="返回上一级" tabindex="-1">返回上一级 <a class="header-anchor" href="#返回上一级" aria-label="Permalink to &quot;返回上一级&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.back();</span></span></code></pre></div><h4 id="返回根路由" tabindex="-1">返回根路由 <a class="header-anchor" href="#返回根路由" aria-label="Permalink to &quot;返回根路由&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.offAll();</span></span></code></pre></div><h4 id="路由跳转传值以及接收数据" tabindex="-1">路由跳转传值以及接收数据 <a class="header-anchor" href="#路由跳转传值以及接收数据" aria-label="Permalink to &quot;路由跳转传值以及接收数据&quot;">​</a></h4><p><strong>路由配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>getPages: [</span></span>
<span class="line"><span>    GetPage(name: &quot;/shop&quot;, page: () =&gt; const ShopPage()),</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>]</span></span></code></pre></div><p><strong>跳转传值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Get.toNamed(&quot;/shop&quot;,arguments: {</span></span>
<span class="line"><span>   &quot;id&quot;: 20</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><strong>接收数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>print(Get.arguments);</span></span></code></pre></div><h4 id="路由封装" tabindex="-1">路由封装 <a class="header-anchor" href="#路由封装" aria-label="Permalink to &quot;路由封装&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// routes.dart</span></span>
<span class="line"><span>import &#39;package:get/get.dart&#39;;</span></span>
<span class="line"><span>import &#39;../pages/tabs/dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class AppPage {</span></span>
<span class="line"><span>    static final routes = [</span></span>
<span class="line"><span>        GetPage(name: &#39;/&#39; , page: () =&gt; const Tabs()),</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>GetMaterialApp(</span></span>
<span class="line"><span>    initialRoute: &#39;/&#39;,</span></span>
<span class="line"><span>    getPages: AppPage.routes,</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="路由中间件" tabindex="-1">路由中间件 <a class="header-anchor" href="#路由中间件" aria-label="Permalink to &quot;路由中间件&quot;">​</a></h4><p><strong>配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//</span></span>
<span class="line"><span>import &#39;package:flutter/cupertino.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:get/get.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ShopMiddleWare extends GetMiddleware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @override</span></span>
<span class="line"><span>    RouteSettings? redirect(String? route){</span></span>
<span class="line"><span>return const RouteSettings(name: &quot;/login&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>GetPage(name: &#39;/&#39; , page: () =&gt; const Tabs()， middlewares: [])</span></span></code></pre></div><h3 id="状态管理" tabindex="-1">状态管理 <a class="header-anchor" href="#状态管理" aria-label="Permalink to &quot;状态管理&quot;">​</a></h3><h4 id="响应式状态管理" tabindex="-1">响应式状态管理 <a class="header-anchor" href="#响应式状态管理" aria-label="Permalink to &quot;响应式状态管理&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义</span></span>
<span class="line"><span>final _count = 0.obs;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改</span></span>
<span class="line"><span>_count++; // 不用套setState()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>Obx(() =&gt; {</span></span>
<span class="line"><span>Text(&quot;\${_count.value}&quot;);</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="依赖管理" tabindex="-1">依赖管理 <a class="header-anchor" href="#依赖管理" aria-label="Permalink to &quot;依赖管理&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- lib</span></span>
<span class="line"><span>    - controllers</span></span>
<span class="line"><span>    - counter.dart</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;package:get/get.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CounterController extends GetxController {</span></span>
<span class="line"><span>    RxInt counter = 0.obs;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    inc(){</span></span>
<span class="line"><span>counter.value++;</span></span>
<span class="line"><span>        update();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    dec(){</span></span>
<span class="line"><span>counter.value--;</span></span>
<span class="line"><span>        update();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class _HomePageState extends State&lt;HomePage&gt; {</span></span>
<span class="line"><span>    CounterController  counterController = Get.put(CounterController());</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>     Obx(()=&gt; Text(&quot;\${counterController.counter}&quot;));</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>        counterControlle.inc();</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class _CategoryPageState extends State&lt;CategoryPage&gt; {</span></span>
<span class="line"><span>CounterController  counterController = Get.find();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="binding" tabindex="-1">Binding <a class="header-anchor" href="#binding" aria-label="Permalink to &quot;Binding&quot;">​</a></h4><p><strong>在我们使用 GetX 状态管理器的时候，往往每次都是用需要手动实例化一个控制器，这样的话基本页面都需要实例化一次，这样就太麻烦了，而</strong> <code>Binding</code>能解决上述问题，可以在项目初始化时把所有需要进行状态管理的控制器进行统一初始化。** **在前面的文章中，我们经常使用 <code>Get.put(MyContro11er())</code>来进行控制器实例的创建，这样我们就算不使用控制器实例也会被创建，其实 Gtx 还提供很多创建实例的方法，可根据不同的业务来进行创建，接下来我们简单介绍一下几个最常用的</p><ul><li><code>Get.put()</code>:不使用控制器实例也会被创建</li><li><code>Get.lazyPut()</code>:獭加载方式创建实例，只有在使用时才创建</li><li><code>Get.putAsync()</code>:Get.put()的异步版版本</li><li><code>Get.create()</code>:每次使用都会创建一个新的实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- lib</span></span>
<span class="line"><span>    - binding</span></span>
<span class="line"><span>    - binding.dart</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;package:get/get.dart&#39;;</span></span>
<span class="line"><span>import &#39;../controllers/counter.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class AllControllerBinding implements Bindings {</span></span>
<span class="line"><span>@override</span></span>
<span class="line"><span>    void dependencies() {</span></span>
<span class="line"><span>Get.lazyPut&lt;CounterController&gt;(() =&gt; CounterController());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;./binding/binding.dart&#39;;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>GetMaterialApp(</span></span>
<span class="line"><span>initialBinding: AllControllerBinding(),</span></span>
<span class="line"><span>)</span></span></code></pre></div>`,332),l=[p];function i(o,r,c,d,g,h){return a(),n("div",null,l)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
