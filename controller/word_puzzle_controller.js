var add_ch = require('../model/word_puzzle_model');

exports.insert = async (req, res) => {

    var ch = "abcdefghijklmnopqrstuvwxyz";
    var len = 16 - req.body.name.length;
    var rand = '';
    var merge = '';
    for (var i = 0; i < len; i++) {
        var y = Math.floor(Math.random() * ch.length);
        rand += ch.substring(y, y + 1);
    }
    merge = req.body.name + rand;
    strarr = merge.split('');

    var i, j, k;
    for (i = 0; i < strarr.length; i++) {
        j = Math.floor(Math.random() * i)
        k = strarr[i]
        strarr[i] = strarr[j]
        strarr[j] = k
    }
    merge = strarr.join('');

    req.body.rand = rand;
    req.body.merge = merge;

    var data = await add_ch.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}
exports.get_data = async (req, res) => {

    var data = await add_ch.find(req.body);

    res.status(200).json({
        status: "data select",
        data
    })
}