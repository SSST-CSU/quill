const angular = require('angular');

angular.module('reg')
    .constant('EVENT_INFO', {
        NAME: '中南大学计算机学院第一届极客对抗邀请赛',
    })
    .constant('DASHBOARD', {
        UNVERIFIED: '你应该已经收到了一封验证邮件，请点击邮件里面的链接验证你的 Email。',
        INCOMPLETE_TITLE: '你的报名信息尚未完善。',
        INCOMPLETE: '请在 [APP_DEADLINE] 之前完善你的报名信息，否则我们将不会计算你的成绩。',
        SUBMITTED_TITLE: '报名信息已提交。',
        SUBMITTED: '在报名截止之前你仍然可以修改你的报名信息，并请在截止前确认信息正确无误。',
        CLOSED_AND_INCOMPLETE_TITLE: 'Unfortunately, registration has closed, and the lottery process has begun.',
        CLOSED_AND_INCOMPLETE: 'Because you have not completed your profile in time, you will not be eligible for the lottery process.',
        ADMITTED_AND_CAN_CONFIRM_TITLE: 'You must confirm by [CONFIRM_DEADLINE].',
        ADMITTED_AND_CANNOT_CONFIRM_TITLE: 'Your confirmation deadline of [CONFIRM_DEADLINE] has passed.',
        ADMITTED_AND_CANNOT_CONFIRM: 'Although you were accepted, you did not complete your confirmation in time.\nUnfortunately, this means that you will not be able to attend the event, as we must begin to accept other applicants on the waitlist.\nWe hope to see you again next year!',
        CONFIRMED_NOT_PAST_TITLE: 'You can edit your confirmation information until [CONFIRM_DEADLINE]',
        DECLINED: 'We\'re sorry to hear that you won\'t be able to make it to HackMIT 2015! :(\nMaybe next year! We hope you see you again soon.',
    })
    .constant('TEAM',{
        NO_TEAM_REG_CLOSED: '在报名结束之后不能再添加队伍。',
    });
