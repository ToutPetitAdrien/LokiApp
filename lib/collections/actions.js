Actions = new Mongo.Collection("actions");

Meteor.methods({

    addActions:function(titleAction){
        switch (titleAction) {
            case 'Popo':
                nbPoints = 1
                break;
            case 'Promenade':
                nbPoints = 2
                break;
            case 'Douche':
                nbPoints = 2
                break;
            case 'Repas':
                nbPoints = 1
                break;
            case 'Friandise':
                nbPoints = 0.5
                break;
            case 'Papattes':
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
        )
        return newAction;
    }
})
