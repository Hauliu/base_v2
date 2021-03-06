
layui.use(['layer', 'form', 'admin', 'ax', 'layedit'], function () {
    var $ = layui.jquery;
    var $ax = layui.ax;
    var form = layui.form;
    var admin = layui.admin;
    var layer = layui.layer;
    var layedit = layui.layedit;
    // 让当前iframe弹层高度适应
    // admin.iframeAuto();

    //获取参数信息
    var ajax = new $ax(Feng.ctxPath + "/problem/detail/" + Feng.getUrlParam("problemId"));
    var result = ajax.start();
    form.val('problemForm', result);

    var content_index = layedit.build('content', {
        height: 400,
        tool: [
            'strong' //加粗
            , 'italic' //斜体
            , 'underline' //下划线
            , 'del' //删除线
            , '|' //分割线
            , 'left' //左对齐
            , 'center' //居中对齐
            , 'right' //右对齐
        ]
    }); //建立编辑器
    //验证富文本内容
    form.verify({
        content_desc: function () {
            layedit.sync(content_index);
        }
    })




    // 表单提交事件
    form.on('submit(btnSubmit)', function (data) {
        var ajax = new $ax(Feng.ctxPath + "/problem/edit", function (data) {
            Feng.success("修改成功！");
            //传给上个页面，刷新table用
            admin.putTempData('formOk', true);
            //关掉对话框
            admin.closeThisDialog();
        }, function (data) {
            Feng.error("添加失败！" + data.responseJSON.message)
        });
        ajax.set(data.field);
        ajax.start();
    });
});
