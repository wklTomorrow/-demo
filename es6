JavaScript scoping


函数声明与函数表达式的差别

先看两个例子：


function test() {
  foo();
 
  function foo() {
    alert("我是会出现的啦……");
  }
}
 
test();

function test() {
  foo();
 
  var foo = function() {
    alert("我不会出现的哦……");
  }
}
 
test();
函数变量自动提升属性。
函数声明是直接用function foo() {}进行定义的
函数表达式是 定义函数之后在进行函数的操作，就是 var foo = function {}
使用let 与const 定于常量不存在变量提升的特性，let进行的操作是当前的块级作用域
ES6数据类型增加了Symbol 加上之前的number string boolean null undefined
合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的
padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
const 命令
const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。
属性名表达式
ES6允许用表达式作为属性名，但是一定要将表达式放在方括号内。
//一是+0不等于-0
Object.is(+0,-0);  //false
+0 === -0  //true
//二是NaN等于本身
Object.is(NaN,NaN); //true
NaN === NaN  //false
类数组对象
一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。
// 没有 length 属性,则返回空数组    // 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组 

嵌套数组转一维数组
flat()
当箭头函数要返回对象的时候，为了区分于代码块，要用 () 将对象包裹起来
var f = (id,name) => {id: id, name: name};
f(6,2);  // SyntaxError: Unexpected token :
var f = (id,name) => ({id: id, name: name});
f(6,2);  // {id: 6, name: 2}
迭代器： const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();
 
it.next();
>{value: "zero", done: false}
it.next();
>{value: "one", done: false}
it.next();
>{value: "two", done: false}
it.next();
>{value: undefined, done: true}

Object 对象： 
Object.assign(paramA,paramB) 浅拷贝 把第二参数赋值给第一参数


str.replace(/aa/ , (result,key)=>{}) 其中result 是每次匹配成功时候的值，key 是其出现的位置的下标key

class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: ' + value);
  }
}
let inst = new MyClass();
inst.prop = 123;
// setter: 123
inst.prop
// 'getter'


uh#z3pjjFX;r // 
CSS去除浮动
.clearfix:after {
  content: '.';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
git 关联本地项目的步骤
1、git init
2、git commit -m "first commit"
3、git remote add origin https://github.com/XXX(username)/YYYY(projectname).git
4、git pull --rebase
5、git branch --set-upstream-to=origin/master
6、git push -u origin master

设置input提示字的样式 ：
::-webkit-input-placeholder {
  font-weight: 100 !important;
}
CSS选择器： {
.item:first-child.top-active::after {
      width: calc(~"100% + 70px");
      left: -40px;
    }
}

JSON.stringify()的几种妙用：
1.判断数组是否包含某对象，或者判断对象是否相等。
2.让localStorage/sessionStorage可以存储对象。
3.实现对象深拷贝


qs.parse('name=jim&name=lily&age=22')  // {name: ['jim', 'lily'], age: 22}

qs.stringify({name: ['jim', 'lily'], age: 22});  // 'age=22&name=jim&name=lily'

qs.parseUrl('http://www.baidu.com?name=jim');
// {url: 'http://www.baidu.com', query: {name: 'jim'}}

float 浮动的原因
使用浮动之后，元素会脱离标准的文档流。
（标准的文档流就是按照不同的元素种类，如块元素，行元素按照各自的特点去排列显示，虽然属性不同，
但都是按照从上到下，从左到右的顺序进行排列）

.user.login（中间没有空格）匹配到class同时含有user和login的元素，是<span class="user login">。

文本内容超出显示：div:hover{
    text-overflow:inherit; 
    overflow: visible; 
    white-space: pre-line;     /*合并空白符序列，但是保留换行符。*/
}
.jade文件 .ejs文件
退出nginx ：
查看nginx进程： tasklist /fi "imagename eq nginx.exe"
结束nginx进程： taskkill /fi "imagename eq nginx.exe" /f

<!-- <div class="main" v-for="(item, $index) in menu" :key="$index">
          <div class="content">
            <div class="children" :class="{'active': active === item.id }">
              <i
                class="el-icon-caret-bottom"
                :style="{'transform':`rotate(${degBase.deg+$index?0:180}deg)`}"
                @click="select(item, $index)"
              ></i>
              {{ item.name }}
            </div>
            <div v-if="item.show && item.children && item.children.length > 0">
              <div
                class="children"
                @click="click(m)"
                :class="{'active': active === m.id }"
                v-for="(m ,index) in item.children"
                :key="index"
              >
                <span>{{ m.name }}</span>
              </div>
            </div>
          </div>
        </div>-->
		
		// select(ele, m) {
    //   console.log(m);
    //   console.log(this.degBase.deg);
    //   let x = this.degBase.deg + m;
    //   console.log(x);
    //   //   if (x.indexOf(true) > -1 || x.indexOf(false) > -1) {
    //   //     x = !x;
    //   //   } else {
    //   //     x = false;
    //   //   }
    //   this.active = ele.id;
    //   ele.show = !ele.show;
    // },
    // click(ele) {
    //   this.active = ele.id;
    // }
今天使用element ui的下拉选择框组件时，发现选中了值却没有显示在框中。
el-select 选中下拉框数据并未回显
解决方法：
出现这个问题好像是因为下拉框数据是循环别的接口得来的，因为数据层次太多，render函数没有自动更新，需手动强制刷新所以我直接强制刷新了值，而forceUpdate就是重新render。



在选中事件加上 this.$forceUpdate()强制刷新即可。

font-size 设置px值后，一个字符的宽度就是设置的字体大小

会改变原数组的js方法 : 
pop()---删除数组的最后一个元素并返回删除的元素。

push()---向数组的末尾添加一个或更多元素，并返回新的长度。

shift()---删除并返回数组的第一个元素。

unshift()---向数组的开头添加一个或更多元素，并返回新的长度。

reverse()---反转数组的元素顺序。

sort()---对数组的元素进行排序。

splice()---用于插入、删除或替换数组的元素。
vertical-align： 主要是用于行内元素的对齐方式
input type="textarea" 用resize设置其大小不变

 





















