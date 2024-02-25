const Group = require("../../models/groups");


// グループ追加処理

exports.groupEstablishHandler = async (req, res, next) => {
    try {
        const randomInt = Math.floor(Math.random() * 5) + 1;
        const user = req.bodyUser;
        const newGroup = await new Group({
            header: req.body.header,
            icon: req.body.icon,
            name: req.body.name,
            subTitle: req.body.subTitle,
            desc: req.body.desc,
            defaultIcon: `default_group_icon${randomInt}.png`,
            tags: req.body.tags,
            owner: req.body.owner,
            member:
                [
                    {
                        _id: user._id,
                        role: "オーナー",
                    }
                ],
            },
        );
        const group = await newGroup.save();
        req.group = group;
        await user.updateOne({
            $push: {
                groups: group._id.toString()
            }
        })
        user.save();
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}