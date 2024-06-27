
module.exports = {
    format_date: (date) => {
        const d = new Date(date);
        const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
        const hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
        const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        const formattedTime = `${hours}:${minutes} ${d.getHours() > 12 ? 'PM' : 'AM'}`;

        return `${formattedDate} at ${formattedTime}`;
    },
};