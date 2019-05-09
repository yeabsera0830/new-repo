function versionController() {
    var day = new Date()
    const date = day.getDate()
    const month = day.getMonth() + 1
    const year = day.getFullYear()
    var version = year
    if (month / 10 < 1) {
        version *= 100
        version += month
    } else {
        version += month
    }
    if (date / 10 < 1) {
        version *= 100
        version += date
    } else {
        version += date
    }
    return version
}

module.exports = versionController