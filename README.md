## rz-comp
A components group base on element-ui

---

### Component Install
Should import [Element](https://element.eleme.cn) first.  
You can import the Element entirely or import the components that mentions below on demand.  

```
npm install rz-comp -S
```

### Component Details
#### rz-sidebar
>Element Requirements:  
>- Menu 
>- MenuItem
>- Submenu
>- Tooltip (while attribute *collapse* is true)

```
<rz-sidebar
  :list="List"
  :config="Config"/>
```
##### Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|config|components config|Object|-|-|
|list|item list|Array|-|-|

##### Object *Config* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|collapse|whether the menu is collapsed|Boolean|-|false|
|defaultActive|the index of menu in *List*  |String|-|-|
|defaultOpenAll|whether open all the sub-menus|Boolean|-|true|

##### Array *List* Structure
```
List: [
  {
    label: 'aa',
    isLeaf: true,
    icon: 'el-icon-plus',
    callback() {
    }
  },
  {
    label: 'bb',
    isLeaf: false,
    leafList: [
      {
        label: 'bb-1', icon: 'el-icon-minus', callback() {
        }
      },
      {
        label: 'bb-2', callback() {
        }
      },
    ],
    icon: 'el-icon-location'
  }
]
```
##### Object the item of *List* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|isLeaf|whether the menu node has no submenu|Boolean|-|true| 
|icon|the name of icon|String|-|-| 
|leafList|submenu list while *isLeaf* is false|Array|see the item attributes below|-| 
|callback|the method when menu is clicked|Function|-|-| 
##### Object the item of *leafList* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|icon|the name of icon|String|-|-| 
|callback|the method when menu is clicked|Function|-|-| 

#### rz-query-bar
>Element Requirements:  
>- Button
>- Input (while attribute *type* = 'text')
>- DatePicker (while attribute *type* = 'date' or 'date-range')
>- Select (while attribute *type* = 'select')
>- Option (while attribute *type* = 'select')

```
<rz-query-bar
  :button-group="buttonGroup"
  :list="List"
  :data.sync="Data"/>
```
##### Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|buttonGroup|operation button group|Array|-|-|
|list|item list|Array|-|-|
|data|binding value|Object|{}|-|

##### Array *List* Structure
```
List: [
  {
    type: 'text', 
    label: 'aa',
    size: 'small',
    prop: 'a',
    clearable: false,
  },
  {
    type: 'date',
    label: 'bb',
    size: 'small',
    prop: 'b',
  },
  {
    type: 'date-range',
    label: 'cc',
    size: 'small',
    pickerList: [
      {
        label: 'Latest Month',
        duringTime: 3600 * 24 * 1000 * 30,
      }
    ],
    prop: 'c',
  },
  {
    type: 'select',
    label: 'dd',
    size: 'small',
    selectList: [
      {key: 0, label: '0'},
      {key: 1, label: '1'},
      {key: 2, label: '2'},
    ], 
    prop: 'd',
  }
]
```

##### Object the item of *List* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|type|(required) the type of item|String|text / date / select / date-range|-|
|prop|(required) the data key name of item|String|-|-|
|label|label text|String|-|-|
|size|size of item|String|small / mini / undefined|-|
|clearable|whether component provides a clear button|Boolean|-|true|
|pickerList|the date picker config when *type* = 'date-range'|Array|see the item attributes below|-|
|selectList|the options list when *type* = 'select'|Array|see the item attributes below|-|

##### Object the item of *pickerList* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|duringTime|the time before now (unit: ms)|Number|-|-| 

##### Object the item of *selectList* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|key|option key name|String|-|-| 


##### Array *buttonGroup* Structure
```
buttonGroup: [
  {
    label: 'Search',
    size: 'small',
    type: 'primary',
    callback() {
    }
  },
  {
    label: 'Delete',
    size: 'small',
    callback() {

    }
  }
],
```
##### Object the item of *buttonGroup* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|size|size of item|String|small / mini / undefined|-|
|type|[Element Button](https://element.eleme.cn/#/en-US/component/button) type|String|primary / success / warning / danger / info / text|-|
|callback|the method when button is clicked|Function|-|-| 

#### rz-form-item
>Element Requirements:  
>- Button
>- Input (while attribute *type* = 'text')
>- DatePicker (while attribute *type* = 'date' or 'date-range')
>- Select (while attribute *type* = 'select')
>- Option (while attribute *type* = 'select')
>- Switch (while attribute *type* = 'switch')

```
<rz-form-item
    :config="Config"
    :list="List"
    :rules="Rules"
    :data.sync="Data"/>
```
##### Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|config|components config|Object|-|-|
|list|item list|Array|-|-|
|rules|[Element Form](https://element.eleme.cn/#/en-US/component/form) rules|Object|-|-|
|data|binding value|Object|{}|-|

##### Object *Config* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|refName|ref name of the form|String|-|-| 
|size|size of item|String|small / mini / undefined|-|
|identity|form items id prefix. Shouldn't be same as other *rz-form-item*|String|-|-| 

##### Array *List* Structure
```
List: [
  {type: 'text', label: 'aa', prop: 'a', clearable: false, limit: [0, 10]},
  {type: 'date', label: 'bb', prop: 'b'},
  {
    type: 'select',
    label: 'cc',
    prop: 'c',
    selectList: [
      {key: 0, label: '0'},
      {key: 1, label: '1'},
    ]
  },
  {type: 'switch', label: 'ee', prop: 'e'},
  {type: 'text', inputType: 'textarea', rows: 5,  label: 'dd', prop: 'd'},
],
```
##### Object the item of *List* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|type|(required) the type of item|String|text / date / select / switch / date-range|-|
|prop|(required) the data key name of item|String|-|-|
|label|label text|String|-|-|
|size|size of item|String|small / mini / undefined|-|
|clearable|whether component provides a clear button|Boolean|-|true|
|limit|text string length limit. When *type* = 'text'|Array(2)|[min, max]|-|
|pickerList|the date picker config when *type* = 'date-range'|Array|see the item attributes below|-|
|selectList|the options list when *type* = 'select'|Array|see the item attributes below|-|
|inputType|type of input. When *type* = 'text'|String|textarea / undefined|-|
|rows|numbers of text area rows. When *inputType* = 'textarea'|Number|-|3|


##### Object the item of *pickerList* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|duringTime|the time before now (unit: ms)|Number|-|-| 

##### Object the item of *selectList* Attributes
|Attribute|Description|Type|Accepted Values|Default|  
|:---|:---|:---|:---|:---|
|label|label text|String|-|-| 
|key|option key name|String|-|-| 
