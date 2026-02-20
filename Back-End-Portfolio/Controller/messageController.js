const {sendMailByNodeMailer,sendMailByNodeMailer2} = require("../utility/sendMailByNodeMailer");

const messageController = async (req, res) => {
    try {
        const data = req.body;

        const [response, response2] = await Promise.all([
            sendMailByNodeMailer(data),
            sendMailByNodeMailer2(data),
        ]);

        if (response && response2) {
            return res.status(200).json({
                message: "Successfully message sent",
            });
        }

        return res.status(500).json({
            message: "Failed to send message",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = messageController;