<template>
    <div style="width: 500px;height: 400px;">
        <el-tabs type="border-card">
            <el-tab-pane label="秒">
                <el-radio-group v-model="second.type" @change="secondRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">每秒 允许的通配符[, - * /]</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">
                                周期从
                                <el-input-number size="mini" :min="1" :max="59" v-model="second.periodStart" @change="secondNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" :min="1" :max="59" v-model="second.periodEnd" @change="secondNumberChange"></el-input-number>
                                秒
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                从
                                <el-input-number size="mini" :min="1" :max="59" v-model="second.from"  @change="secondNumberChange"></el-input-number>
                                秒开始,每
                                <el-input-number size="mini" :min="1" :max="59" v-model="second.interval"  @change="secondNumberChange"></el-input-number>
                                秒执行一次
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="4">指定</el-radio>
                        </div>
                        <el-checkbox-group v-model="second.numList" @change="secondCheckedChange">
                            <el-checkbox v-for="(item, index) in seconds"
                                         :key="item"  :label="index">{{item}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="分">
                <el-radio-group v-model="minute.type" @change="minuteRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">每分 允许的通配符[, - * /]</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">
                                周期从
                                <el-input-number size="mini" :min="1" :max="59" v-model="minute.periodStart" @change="minuteNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" :min="1" :max="59" v-model="minute.periodEnd" @change="minuteNumberChange"></el-input-number>
                                分钟
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                从
                                <el-input-number size="mini" :min="1" :max="59" v-model="minute.from" @change="minuteNumberChange"></el-input-number>
                                分钟开始,每
                                <el-input-number size="mini" :min="1" :max="59" v-model="minute.interval" @change="minuteNumberChange"></el-input-number>
                                分钟执行一次
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="4">指定</el-radio>
                        </div>
                        <el-checkbox-group v-model="minute.numList" @change="minuteCheckedChange">
                            <el-checkbox v-for="(item, index) in minutes"
                                         :key="item"  :label="index">{{item}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="时">
                <el-radio-group v-model="hour.type" @change="hourRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">每小时 允许的通配符[, - * /]</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">
                                周期从
                                <el-input-number size="mini" :min="1" :max="23" v-model="hour.periodStart" @change="hourNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" :min="1" :max="23" v-model="hour.periodEnd" @change="hourNumberChange"></el-input-number>
                                小时
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                从
                                <el-input-number size="mini" :min="1" :max="23" v-model="hour.from" @change="hourNumberChange"></el-input-number>
                                小时开始,每
                                <el-input-number size="mini" :min="1" :max="23" v-model="hour.interval" @change="hourNumberChange"></el-input-number>
                                小时执行一次
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="4">指定</el-radio>
                        </div>
                        <el-checkbox-group v-model="hour.numList" @change="hourCheckedChange">
                            <el-checkbox v-for="(item, index) in hours"
                                         :key="item"  :label="index">{{item}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="日">
                <el-radio-group v-model="day.type" @change="dayRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">日 允许的通配符[, - * / L W]</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">不指定</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                周期从
                                <el-input-number size="mini" :min="1" :max="31" v-model="day.periodStart" @change="dayNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" :min="1" :max="31" v-model="day.periodEnd" @change="dayNumberChange"></el-input-number>
                                日
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="4">
                                从
                                <el-input-number size="mini" :min="1" :max="31" v-model="day.from" @change="dayNumberChange"></el-input-number>
                                号开始,每
                                <el-input-number size="mini" :min="1" :max="31" v-model="day.interval" @change="dayNumberChange"></el-input-number>
                                天执行一次
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="5">
                                每月
                                <el-input-number size="mini" :min="1" :max="31" v-model="day.day"  @change="dayNumberChange"></el-input-number>
                                号最近的那个工作日
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="6">
                                每月最后一天
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="7">指定</el-radio>
                        </div>
                        <el-checkbox-group v-model="day.numList" @change="dayCheckedChange">
                            <el-checkbox v-for="(item, index) in days"
                                         :key="index"  :label="item">{{item}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="月">
                <el-radio-group v-model="month.type" @change="monthRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">月 允许的通配符[, - * /]</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">不指定</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                周期从
                                <el-input-number size="mini" :min="1" :max="12" v-model="month.periodStart" @change="monthNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" :min="1" :max="12" v-model="month.periodEnd" @change="monthNumberChange"></el-input-number>
                                月
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="4">
                                从
                                <el-input-number size="mini" :min="1" :max="31" v-model="month.from" @change="monthNumberChange"></el-input-number>
                                月开始,每
                                <el-input-number size="mini" :min="1" :max="12" v-model="month.interval" @change="monthNumberChange"></el-input-number>
                                月执行一次
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="5">指定</el-radio>
                        </div>
                        <el-checkbox-group v-model="month.numList" @change="monthCheckedChange">
                            <el-checkbox v-for="(item, index) in months"
                                         :key="index"  :label="item">{{item}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="周">
                <el-radio-group v-model="week.type" @change="weekRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">周 允许的通配符[, - * / L #]</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">不指定</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                周期 从星期
                                <el-input-number size="mini" :min="1" :max="7" v-model="week.periodStart" @change="weekNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" :min="1" :max="7" v-model="week.periodEnd" @change="weekNumberChange"></el-input-number>
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="4">
                                第
                                <el-input-number size="mini" :min="1" :max="4" v-model="week.from" @change="weekNumberChange"></el-input-number>
                                周	的星期
                                <el-input-number size="mini" :min="1" :max="7" v-model="week.interval" @change="weekNumberChange"></el-input-number>
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="5">
                                本月最后一个星期
                                <el-input-number size="mini" v-model="week.lastWeek" @change="weekNumberChange"></el-input-number>
                            </el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 22px;padding-top: 8px;">
                            <el-radio label="6">指定</el-radio>
                        </div>
                        <el-checkbox-group v-model="week.numList" @change="weekCheckedChange">
                            <el-checkbox v-for="(item, index) in weeks"
                                         :key="item"  :label="item">{{item}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="年">
                <el-radio-group v-model="year.type" @change="yearRadioChange">
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="1">不指定 允许的通配符[, - * /] 非必填</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="2">每年</el-radio>
                        </div>
                    </div>
                    <div>
                        <div style="height: 30px;">
                            <el-radio label="3">
                                周期 从
                                <el-input-number size="mini" v-model="year.periodStart" @change="yearNumberChange"></el-input-number>
                                -
                                <el-input-number size="mini" v-model="year.periodEnd" @change="yearNumberChange"></el-input-number>
                            </el-radio>
                        </div>
                    </div>
                </el-radio-group>
            </el-tab-pane>
        </el-tabs>
        <div>
            <table style="width: 100%;">
                <thead>
                <tr>
                    <td width="23%"></td>
                    <td style="text-align: center">秒</td>
                    <td style="text-align: center">分</td>
                    <td style="text-align: center">时</td>
                    <td style="text-align: center">日</td>
                    <td style="text-align: center">月</td>
                    <td style="text-align: center">星期</td>
                    <td style="text-align: center">年</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>表达式字段:</td>
                    <td>
                        <el-input v-model="cron.second" size="small"></el-input>
                    </td>
                    <td>
                        <el-input v-model="cron.minute" size="small"></el-input>
                    </td>
                    <td>
                        <el-input v-model="cron.hour" size="small"></el-input>
                    </td>
                    <td>
                        <el-input v-model="cron.day" size="small"></el-input>
                    </td>
                    <td>
                        <el-input v-model="cron.month" size="small"></el-input>
                    </td>
                    <td>
                        <el-input v-model="cron.week" size="small"></el-input>
                    </td>
                    <td>
                        <el-input v-model="cron.yead" size="small"></el-input>
                    </td>
                </tr>
                <tr>
                    <td>Cron 表达式:</td>
                    <td colspan="7">
                        <el-input v-model="cron.expression" size="small"></el-input>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);

    export default {
        name: 'LzCron',
        props: {
        },
        data: function () {
            const num1 = [];
            for(var i=0;i<6;i++){
                for(var j=0;j<10;j++){
                    num1.push(i+""+j);
                }
            }
            const num2 = [];
            for(var k=0;k<2;k++){
                for(var l=0;l<10;l++){
                    num2.push(k+""+l);
                }
            }
            num2.push("20");
            num2.push("21");
            num2.push("22");
            num2.push("23");
            const num3 = [];
            for(var m=1;m<=31;m++){
                num3.push(m);
            }
            return {
                second:{
                    type: '1',
                    periodStart: 1,
                    periodEnd:2,
                    from: 1,
                    interval: 2,
                    numList: []
                },
                minute:{
                    type: '1',
                    periodStart: 1,
                    periodEnd:2,
                    from: 1,
                    interval: 2,
                    numList: []
                },
                hour:{
                    type: '1',
                    periodStart: 1,
                    periodEnd:2,
                    from: 1,
                    interval: 2,
                    numList: []
                },
                day:{
                    type: '1',
                    periodStart: 1,
                    periodEnd: 2,
                    from: 1,
                    interval: 2,
                    day:null,
                    numList: []
                },
                month:{
                    type: '1',
                    periodStart: 1,
                    periodEnd: 2,
                    from: 1,
                    interval: 2,
                    numList: []
                },
                week:{
                    type: '1',
                    periodStart: 1,
                    periodEnd: 2,
                    from: 1,
                    interval: 2,
                    lastWeek:null,
                    numList: []
                },
                year:{
                    type: '',
                    periodStart: 0,
                    periodEnd:0
                },
                seconds: num1,
                minutes: num1,
                hours: num2,
                days: num3,
                months:[1,2,3,4,5,6,7,8,9,10,11,12],
                weeks:[1,2,3,4,5,6,7],
                cron:{
                    second:'*',
                    minute:'*',
                    hour:'*',
                    day:'*',
                    month:'*',
                    week:'?',
                    year:'',
                    expression:'* * * * * ?'
                }
            }
        },
        methods: {
            secondRadioChange(val){
                if("1"==val){
                    this.cron.second="*";
                }else if("2"==val){
                    this.cron.second=this.second.periodStart+"-"+this.second.periodEnd;
                }else if("3"==val){
                    this.cron.second=this.second.from+"/"+this.second.interval;
                }else if("4"==val){
                    if(this.second.numList.length==0){
                        this.second.numList.push(0);
                    }
                    this.cron.second=this.second.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            secondNumberChange(val){
                if(this.second.type='2'){
                    this.cron.second=this.second.periodStart+"-"+this.second.periodEnd;
                }else if(this.second.type='3'){
                    this.cron.second=this.second.from+"/"+this.second.interval;
                }
                this.setExpression();
            },
            secondCheckedChange(val){
                if(this.second.type=='4'){
                    this.cron.second=this.second.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            minuteRadioChange(val){
                if("1"==val){
                    this.cron.minute="*";
                }else if("2"==val){
                    this.cron.minute=this.minute.periodStart+"-"+this.minute.periodEnd;
                }else if("3"==val){
                    this.cron.minute=this.minute.from+"/"+this.minute.interval;
                }else if("4"==val){
                    if(this.minute.numList.length==0){
                        this.minute.numList.push(0);
                    }
                    this.cron.minute=this.minute.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            minuteNumberChange(){
                if(this.minute.type='2'){
                    this.cron.minute=this.minute.periodStart+"-"+this.minute.periodEnd;
                }else if(this.minute.type='3'){
                    this.cron.minute=this.minute.from+"/"+this.minute.interval;
                }
                this.setExpression();
            },
            minuteCheckedChange(val){
                if(this.minute.type=='4'){
                    this.cron.minute=this.minute.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            hourRadioChange(val){
                if("1"==val){
                    this.cron.hour="*";
                }else if("2"==val){
                    this.cron.hour=this.hour.periodStart+"-"+this.hour.periodEnd;
                }else if("3"==val){
                    this.cron.hour=this.hour.from+"/"+this.hour.interval;
                }else if("4"==val){
                    if(this.hour.numList.length==0){
                        this.hour.numList.push(0);
                    }
                    this.cron.hour=this.hour.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            hourNumberChange(){
                if(this.hour.type='2'){
                    this.cron.hour=this.hour.periodStart+"-"+this.hour.periodEnd;
                }else if(this.hour.type='3'){
                    this.cron.hour=this.hour.from+"/"+this.hour.interval;
                }
                this.setExpression();
            },
            hourCheckedChange(val){
                if(this.hour.type=='4'){
                    this.cron.hour=this.hour.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            dayRadioChange(val){
                if("1"==val){
                    this.cron.day="*";
                }else if("2"==val){
                    this.cron.day="?";
                }else if("3"==val){
                    this.cron.day=this.day.periodStart+"-"+this.day.periodEnd;
                }else if("4"==val){
                    this.cron.day=this.day.from+"-"+this.day.interval;
                }else if("5"==val){
                    this.cron.day=this.day.day+"W";
                }else if("6"==val){
                    this.cron.day="L";
                }else if("7"==val){
                    if(this.day.numList.length==0){
                        this.day.numList.push(1);
                    }
                    this.cron.day=this.day.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            dayNumberChange(){
                if(this.day.type='3'){
                    this.cron.day=this.day.periodStart+"-"+this.day.periodEnd;
                }else if(this.day.type='4'){
                    this.cron.day=this.day.from+"/"+this.day.interval;
                }else if(this.day.type='5'){
                    this.cron.day=this.day.day+"W";
                }
                this.setExpression();
            },
            dayCheckedChange(val){
                if(this.day.type=='7'){
                    this.cron.day=this.day.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            monthRadioChange(val){
                if("1"==val){
                    this.cron.month="*";
                }else if("2"==val){
                    this.cron.month="?";
                }else if("3"==val){
                    this.cron.month=this.month.periodStart+"-"+this.month.periodEnd;
                }else if("4"==val){
                    this.cron.month=this.month.from+"/"+this.month.interval;
                }else if("5"==val){
                    if(this.month.numList.length==0){
                        this.month.numList.push(1);
                    }
                    this.cron.month=this.month.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            monthNumberChange(){
                if(this.month.type='3'){
                    this.cron.month=this.month.periodStart+"-"+this.month.periodEnd;
                }else if(this.month.type='4'){
                    this.cron.month=this.month.from+"/"+this.month.interval;
                }
                this.setExpression();
            },
            monthCheckedChange(val){
                if(this.month.type=='5'){
                    this.cron.month=this.month.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            weekRadioChange(val){
                if("1"==val){
                    this.cron.week="*";
                }else if("2"==val){
                    this.cron.week="?";
                }else if("3"==val){
                    this.cron.week=this.week.periodStart+"-"+this.week.periodEnd;
                }else if("4"==val){
                    this.cron.week=this.week.from+"/"+this.week.interval;
                }else if("5"==val){
                    this.cron.week=this.week.lastWeek+"L";
                }else if("6"==val){
                    if(this.week.numList.length==0){
                        this.week.numList.push(1);
                    }
                    this.cron.week=this.week.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            weekNumberChange(){
                if(this.week.type='3'){
                    this.cron.week=this.week.periodStart+"-"+this.week.periodEnd;
                }else if(this.week.type='4'){
                    this.cron.week=this.week.from+"#"+this.week.interval;
                }
                this.setExpression();
            },
            weekCheckedChange(val){
                if(this.month.type=='6'){
                    this.cron.day=this.week.numList.sort(this.asc).join(",");
                }
                this.setExpression();
            },
            yearRadioChange(val){
                if("1"==val){
                    this.cron.year="";
                }else if("2"==val){
                    this.cron.year="*";
                }else if("3"==val){
                    this.cron.year=this.year.periodStart+"-"+this.year.periodEnd;
                }
                this.setExpression();
            },
            yearNumberChange(){
                if(this.year.type='3'){
                    this.cron.year=this.year.periodStart+"-"+this.year.periodEnd;
                }
                this.setExpression();
            },
            setExpression(){
                this.cron.expression = this.cron.second+" "+this.cron.minute+" "+this.cron.hour+" "+this.cron.day+" "+this.cron.month+" "+this.cron.week+" ";
                if(""!=this.cron.year || null==this.cron.year){
                    this.cron.expression = this.cron.expression+" "+this.cron.year;
                }
            },
            asc(a,b){
                return a-b;
            }
        }
    }
</script>
<style scoped>
    .el-input-number--mini{
        width: 98px;
    }
    .el-input__inner{
        padding-left: 8px;
        padding-right: 8px;
    }
    .el-checkbox{
        margin-right: 20px;
    }
</style>
