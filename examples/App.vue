<template>
  <div id="app">
    <rz-query-bar
        class="query-style"
        :config="queryConfig"
        :button-group="buttonGroup"
        :data.sync="queryCompData">
    </rz-query-bar>

    <rz-sidebar
        class="side-bar-style"
        :list="sideBarItemList"
        :config="sideBarConfig">
    </rz-sidebar>

    <rz-form-item
        class="form-style"
        :config="formConfig"
        :list="formItemList"
        :rules="formRules"
        :data.sync="formData">
    </rz-form-item>
  </div>
</template>

<script>
  //import RZFormQueryBar from "../packages/components/form-comps/RZFormQueryBar";
  // import RZSideBar from "./components/side-bar/RZSideBar";
  // import RZFormItem from "./components/form-comps/RZFormItem";

  export default {
    name: 'app',
    components: {
     // 'rz-form-query-bar': RZFormQueryBar,
      // 'rz-side-bar': RZSideBar,
      // 'rz-form-item': RZFormItem
    },
    data() {
      return {
        /*搜索框*/
        queryConfig: [
          {
            type: 'text', //required; type: string 组件类型 可选值: text、date、select、date-range
            label: 'aa', //optional; type: string 组件标题
            size: 'small', //optional; type: string 组件尺寸 可选值: small、mini 留空为默认大小
            prop: 'a', //required;
            clearable: false, //optional; default: true
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
                label: '最近一个月',
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
            ], //type: Array 候选列表
            prop: 'd',
          }
        ],
        buttonGroup: [
          {
            label: '查询',
            size: 'small',
            type: 'primary',
            callback() {
            }
          },
          {
            label: '删除',
            size: 'small',
            callback() {

            }
          }
        ],
        queryCompData: {},

        /*侧边栏*/
        sideBarConfig: {
          collapse: false,
          defaultActive: '0',
          defaultOpenAll: true,
        },
        sideBarItemList: [
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
                label: 'bb-1', link: '/link', icon: 'el-icon-minus', callback() {
                }
              },
              {
                label: 'bb-2', link: '/link', callback() {
                }
              },
            ],
            icon: 'el-icon-location'
          }
        ],

        /*表单*/
        formConfig: {
          refName: 'formComp',
          size: 'small',
          identity: 'form-item-'
        },
        formItemList: [
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
        formRules: {
          a: [
            {required: true, message: '请输入aa', trigger: 'blur'},
          ],
        },
        formData: {},
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    position: absolute;
    /*background: #bfc5d1;*/
    width: 100%;
    height: 100%;
  }

  .query-style {
    margin: 20px;
  }

  .side-bar-style {
    width: 220px;
    height: 400px;
    /*border: 1px solid #ededed;*/
  }
</style>
