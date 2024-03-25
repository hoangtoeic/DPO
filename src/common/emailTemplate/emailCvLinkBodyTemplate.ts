export const emailCvLinkBodyTemplate = `  
<body>
<div style="font-family:'Times New Roman', sans-serif;font-weight: 500;font-size: 16px;">
    <div style="text-align:left;padding:60px; color: black!important;">
        <p style="margin-bottom: 10px">
           Hi <strong>{{personName}}</strong>,
        </p>
        <p style="margin-bottom: 10px">
            You have been invited to view the Contract Valuation for the <strong>{{projectName}}</strong> Project. Please click on the CV link below to open the CV
        </p>
        <div>
            <strong>Project Number:</strong> {{projectNumber}}
        </div>

        <div>
            <strong>Project Name:</strong> {{projectName}}
        </div>

        <div>
            <strong>Period:</strong> {{period}}
        </div>

        <div>
            <strong>Type:</strong> {{cvType}}
        </div>

        <div>
            <strong>Status:</strong> {{cvStatus}}
        </div>

        <div>
            <strong>CV Link:</strong> <a href="{{cvLink}}">Click here</a>
        </div>
        <p style="margin-top: 10px">
           Thank you.
        </p> 
    </div>
       
</div>
</body>`;
