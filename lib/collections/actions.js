Actions = new Mongo.Collection("actions");

Meteor.methods({

    addActions:function(titleAction){
        switch (titleAction) {
            case 'popo':
                nbPoints = 1
                break;
            case 'promenade':
                nbPoints = 2
                break;
            case 'douche':
                nbPoints = 2
                break;
            case 'repas':
                nbPoints = 1
                break;
            case 'friandise':
                nbPoints = 0.5
                break;
            case 'papattes':
                nbPoints = 0.5
                break;
        };
        newAction = Actions.insert(
            {
                title: titleAction,
                date: new Date(),
                user: this.userId,
                points: nbPoints
            }
        );
        return newAction;
    }
})
