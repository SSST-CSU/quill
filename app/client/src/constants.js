const angular = require('angular');

angular.module('reg')
    .constant('EVENT_INFO', {
        NAME: '中南大学计算机学院第一届极客对抗邀请赛',
    })
    .constant('DASHBOARD', {
        UNVERIFIED: '你应该已经收到了一封验证邮件，请点击邮件里面的链接验证你的 Email。',
        INCOMPLETE_TITLE: '你的报名表尚未提交。',
        INCOMPLETE: '请在 [APP_DEADLINE] 之前提交你的报名表，否则我们将不会计算你的成绩。',
        SUBMITTED_TITLE: '报名表已提交。',
        SUBMITTED: '在报名截止之前你仍然可以修改你的报名表，并请在截止前确认信息正确无误。',
        CLOSED_AND_INCOMPLETE_TITLE: '报名已经结束。',
        CLOSED_AND_INCOMPLETE: '由于你没有提交报名表，你将不能参加本次比赛。\n如有任何疑问请与组委会联系。',
        ADMITTED_AND_CAN_CONFIRM_TITLE: 'You must confirm by [CONFIRM_DEADLINE].',
        ADMITTED_AND_CANNOT_CONFIRM_TITLE: 'Your confirmation deadline of [CONFIRM_DEADLINE] has passed.',
        ADMITTED_AND_CANNOT_CONFIRM: 'Although you were accepted, you did not complete your confirmation in time.\nUnfortunately, this means that you will not be able to attend the event, as we must begin to accept other applicants on the waitlist.\nWe hope to see you again next year!',
        CONFIRMED_NOT_PAST_TITLE: 'You can edit your confirmation information until [CONFIRM_DEADLINE]',
        DECLINED: 'We\'re sorry to hear that you won\'t be able to make it to HackMIT 2015! :(\nMaybe next year! We hope you see you again soon.',
    })
    .constant('TEAM',{
        NO_TEAM_REG_CLOSED: '在报名结束之后不能再创建新的队伍。',
    });
