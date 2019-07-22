export default (_self, h) => {
    let icons = [];
    // 配置按钮
    if (!!_self.obj.config) {
        icons.push(h('Icon', {
            props: {
                type: 'ios-settings',
                size: 18,
            },
            style: {
                marginBottom: '5px',
            },
            nativeOn: {
                click() {
                    _self.$emit('handleConfEle', _self.index);
                }
            }
        }));
    }
    // 删除按钮
    icons.push(h('Icon', {
        props: {
            type: 'ios-trash-outline',
            size: 18,
        },
        style: {
            marginBottom: '5px',
        },
        nativeOn: {
            click() {
                _self.$emit('handleRemoveEle', _self.index);
            }
        }
    }));
    const item_icon = h('div', {
        class: {
            'item-icon': true
        },
        style: {}
    }, icons);
    return item_icon;
}