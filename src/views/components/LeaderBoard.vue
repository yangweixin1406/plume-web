<template>
    <div class="leaderboard">
        <p class="leaderboard-name">{{ title }}</p>

        <div class="leaderboard-list">
            <ul>
                <li v-for="(item, i) in list" :key="i">
                    <div style="display: flex; align-items: center;">
                        <div  class="position">
                            <img v-if="i < 3" :src="position(i + 1)" alt="">
                            <span v-else>{{ i + 1 }}</span>
                        </div>
                        <div class="wallet">
                            {{ maskAddress(item.wallet_address) }}
                        </div>
                    </div>
    
                    <div style="display: flex; align-items: center;">
                        <img src="@/static/images/pp.svg" alt="" style="margin-right: 5px;">
                        <span style="font-size: 18px;">{{ item.total_xp.toLocaleString() }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        position(i) {
            let imgName = ''
            switch(i) {
                case 1:
                    imgName = 'gold.svg'
                    break;
                case 2:
                    imgName = 'silver.svg'
                    break;
                case 3:
                    imgName = 'bronze.svg'
                    break;
            }
            return require(`@/static/images/${imgName}`)
        },
        maskAddress(addr) {
            if (addr.length <= 20) return addr; // 太短的不处理
            const start = addr.slice(0, 10);
            const end = addr.slice(-10);
            return `${start}******${end}`;
        }
    }
}
</script>

<style lang="scss">
.leaderboard {
    width: 100%;
    height: 725px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    .leaderboard-name {
        font-size: 20px;
    }

    .leaderboard-list {
        flex: 1;
        margin-top: 20px;
        overflow: hidden;
    }

    ul {
        width: 100%;
        height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            display: none;
        }
        li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
    }

    .position {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        img {
            width: 35px;
            height:35px;
        }
    }

    .wallet {
        font-size: 16px;
    }
}
</style>