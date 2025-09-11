export const dateTimeMixin = {
    data() {
        return {
            currentDate: '',
            currentTime: '',
            currentWeekDay: '',
            timer: null,
        };
    },
    mounted() {
        // 初始化时获取当前日期和时间
        this.getCurrentDateAndTime();

        // 设置定时器，每秒刷新一次时间
        this.timer = setInterval(() => {
            this.getCurrentDateAndTime();
        }, 1000);
    },
    destroyed() {
        // 清除定时器，防止内存泄漏
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        getCurrentDateAndTime() {
            const now = new Date();

            // 获取年月日
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从 0 开始，因此需要 +1
            const day = now.getDate().toString().padStart(2, '0');
            this.currentDate = `${year}年${month}月${day}日`;

            // 获取时间
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            this.currentTime = `${hours}:${minutes}`;

            // 获取星期
            const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            this.currentWeekDay = weekDays[now.getDay()];
        },
    },
};