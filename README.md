`nmp init -y`
`npm i cypress`
`npx cypress open`


Attribute selectors

* $("[spellcheck]")   attribute presence
* $("[html = '/downloads']")  match value
* $("[src* = 'https']")  contains text
* $("[src^ = //]")  starts with text
* $("[src$ = png]")  ends with text


**Xpath base syntax**
xpath to element from array dom elems - $x("`//a[@id='btn_view' and @href='/fisher-speedmax']`")

* --`//` относительный путь к ссылке `a` (dom элемент); 
* `[@id="btn_view"]` - обращение к атрибуту тега (a)
* `and @href='/fisher-speedmax']` выделение конкретного элемента из массива (дополнительное условие локатора)

## Xpath Axis ##

* ancestor:: - предки расположены от корня дерева до текущего элемента находятся на оси **ancestor**
* self теекущий элемент дом дерева
* descendant:: - потомки расположенные на оси ниже текущего элемента, находятся на оси **descendant**
* preceding:: - предшествующие чьи порядковые номера выше текущего номера элемента
* preceding-sibling:: - предшествующие братья чьи порядковые номера выше текущего номера элемента
* following:: - последующие чьи порядковые номера ниже текущего
* following-sibling:::: - последующие братья чьи порядковые номера ниже текущего

          div
          table
              tr7
                td 7
                   a hef = "some-path" 
                /td
                td 8/td
                td 9/td
              /tr
            /table
          */div

* в этой структуре tr - self и div, table будут родителями, а tr потомками  


* .//ancestor::* ([1,2]) - [div, table]
* .//descendant::* ([2,3,4]) - [td7,td8,td9, a]
* .//parent::*, .//parent::[1] - [table]
* .//child::*, .//child::[3] [td7,td8,td9, a]
* .//preceding::*, .//preceding::[]  [td4, td5, td6]
* .//preceding-sibling::*, .//preceding-sibling::[]  [tr4, tr5, tr6]
* .//following-sibling::*, .//following-sibling::[]  [tr8, tr9, tr10]


## Query ##

https://www.selenium.dev/

* //nav - self

* //nav/ancestor::* all parents
* //nav/parent::*  - first parent
