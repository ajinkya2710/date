const fs = require('fs');
const path = require('path');

const filePath = 'E:/files/file_example_XLS_1000.xls'

exports.dateCheck = function (req, res) {
    const { year, month } = req.body;

    if (!year || !month) {
        return res.status(404).json({ success: 0, message: "Please select the month and year" });
    }
    if (!filePath) {
        return res.status(404).json({
            success: 0,
            message: `File path not received`
        })
    } else if (!fs.existsSync(filePath)) {
        return res.status(404).json({
            success: 0,
            message: `File not found\nPath: ${filePath}`
        });
    }

    setTimeout(() => {
        res.json({
            success: 1,
            message: `File Generated Successfully\nPath:${filePath}`
        });
    }, 1000);
};

exports.downloadFile = function (req, res) {

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({
                success: 0,
                message: `File not found\nPath: ${filePath}`
            });
        }

        res.download(filePath, (downloadErr) => {
            if (downloadErr) {
                return res.status(500).json({
                    success: 0,
                    message: "Error downloading file"
                });
            }
        });
    });

};
