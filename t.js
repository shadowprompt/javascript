function gg(arr, maps, res) {
    arr.forEach(item => {
        let ids = item.split('');
        let id = '';
        let temp = {
            children: {}
        };
        let old = {};

        for (let i = 0; i < ids.length; i++) {

            id = id + ids[i];
            if (i > 0) {
                old = res[ids[i - 1]] && res[ids[i - 1]].children || {};
            }
            temp = {
                ...temp,
                children:{
                    ...old,
                    [id]: {
                        ...maps[id],
                    }
                },
            };

            if(i==0){
                Object.assign(res, temp);
            }
            if( Array.isArray(temp.children[id].children)){
                temp = temp.children[id].children[0];
            }else{
                temp = temp.children[id].children;
            }
        }

    });
    console.log('digui', res);
    return res;
}
var arr = ["000","22"];
var maps = {"0":{"id":"0","label":"一级 1","children":[{"id":"00","label":"二级 1-1","children":[{"id":"000","label":"三级 1-1-1"},{"id":"001","label":"三级 1-1-2"},{"id":"002","label":"三级 1-1-3"}]}]},"1":{"id":"1","label":"一级 2","children":[{"id":"10","label":"二级 2-1"},{"id":"11","label":"二级 2-2"}]},"2":{"id":"2","label":"一级 3","children":[{"id":"20","label":"二级 3-1"},{"id":"21","label":"二级 3-2"},{"id":"22","label":"二级 3-3"}]},"10":{"id":"10","label":"二级 2-1"},"11":{"id":"11","label":"二级 2-2"},"20":{"id":"20","label":"二级 3-1"},"21":{"id":"21","label":"二级 3-2"},"22":{"id":"22","label":"二级 3-3"},"00":{"id":"00","label":"二级 1-1","children":[{"id":"000","label":"三级 1-1-1"},{"id":"001","label":"三级 1-1-2"},{"id":"002","label":"三级 1-1-3"}]},"000":{"id":"000","label":"三级 1-1-1"},"001":{"id":"001","label":"三级 1-1-2"},"002":{"id":"002","label":"三级 1-1-3"}};
var res = {};
gg(arr, maps, res);