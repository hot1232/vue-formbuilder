export default (_self, h) => {
    console.log("return a row")
    return [
        h("draggable",
            /*data:*/
            {
                data: {
                    sortableItem: []
                },
                props: {
                    option: {
                        forceFallback: true,
                        animation: 0,
                        ghostClass: "ghost",
                        group: {
                            name: "shared",
                            put: ["shared"],
                            //revertClone: false
                        },
                        sort: false
                    },
                    sortableItem: _self.obj.sortableItem
                },
                on: {
                    "on-change": function(val) {
                        if (!_self.obj.name) {
                            return false;
                        }
                        _self.obj.value = event.currentTarget.value;
                        _self.$emit('handleChangeVal', val.currentTarget.value)
                    }
                },
            },
            /*children*/
            [
                h(
                    "Row", {
                        gutter: _self.obj.gutter
                    }, []
                )
            ]
        )
    ];
};


export let rowConf = {
    // 内部元素间距
    gutter: 10,
    // 对应数据库内类型
    type: 'row',
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '行',
    placeholder: '',
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: false,
    // 最大长度
    maxLength: 20,
    // 选项内数据
    items: [{ "label_value": null, "label_name": "" }],
    value: '',
    // 表单name
    name: '',
    // 验证错误提示信息
    ruleError: '该字段不能为空',
    // 是否关联字段
    relation: false,
    // 关联字段name
    relation_name: '',
    // 关联字段value
    relation_value: '',
    // 是否被渲染
    visibility: true,
    //缩略图标
    iconName: "ios-create-outline",
    // 子元素
    sortableItem: []
}