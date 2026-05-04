const excuseBasicCounter = 6;
const excuseModeratedCounter = 14;
const excuseExpertCounter = 24;
const excuseMadnessCounter = 36;
    
window.onload = function() {

    const music = document.getElementById('bg-music');

    let musicStarted = false;

    let excuseCounter = 0;

    const GenerateExcuse = () => 
    {
        let who = GetExcuseWho(excuseCounter);
        let action = GetExcuseAction(excuseCounter);
        let what = GetExcuseWhat(excuseCounter);
        let when = GetExcuseWhen(excuseCounter);

        let fullExcuse = who + ' ' + action + ' ' + what + ' ' + when;

        if(excuseCounter > excuseExpertCounter)
            fullExcuse += "!";

        document.getElementById('excuse').innerHTML = fullExcuse;

        let errorSound = new Audio("Error.mp3");
        errorSound.volume = 0.075;
        errorSound.play();

        const levelDisplay = document.getElementById('excuseLevel');
        let levelName = GetExcuseLevelName(excuseCounter);

        levelDisplay.innerHTML = "Excuse Level: " + levelName;
        
        if (excuseCounter < excuseBasicCounter)
            levelDisplay.style.color = "grey";
        else if (excuseCounter < excuseModeratedCounter)
            levelDisplay.style.color = "green";
        else if (excuseCounter < excuseExpertCounter)
            levelDisplay.style.color = "blue";
        else if (excuseCounter < excuseMadnessCounter)
            levelDisplay.style.color = "orange";
        else
            levelDisplay.style.color = "red";

        excuseCounter++;

        if (!musicStarted) 
        {
            music.play().then(() => 
            {
                musicStarted = true;
                music.volume = 0.3;
            }).catch(error => 
            {
                console.log("Error playing music.", error);
            });
        }
    };

    document.getElementById('btn-generate').addEventListener('click', GenerateExcuse);
}

const GetExcuseWho = (excuseFactor) => 
{
    let whoExcusesBasic = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let whoExcusesModerated = ['A stray raccoon', 'A group of mimes', 'My imaginary friend', 'The local sheriff'];
    let whoExcusesExpert = ['An interdimensional traveler', 'A rogue AI', 'The Ghost of Christmas Past', 'A sentient toaster'];
    let whoExcusesMadness = ['The concept of time', 'A cloud with a grudge', 'A choir of invisible frogs', 'My own reflection'];
    let whoExcusesImpossible= ['A lot of non-euclidean eldritch cats', 'The Great Architect of the Universe', 'A black hole with a gambling debt', 'The collective unconscious', 'A forgotten Greek god'];

    if (excuseFactor < excuseBasicCounter)
        return whoExcusesBasic[Math.floor(Math.random() * whoExcusesBasic.length)];
    else if (excuseFactor < excuseModeratedCounter)
        return whoExcusesModerated[Math.floor(Math.random() * whoExcusesModerated.length)];
    else if (excuseFactor < excuseExpertCounter)
        return whoExcusesExpert[Math.floor(Math.random() * whoExcusesExpert.length)];
    else if (excuseFactor < excuseMadnessCounter)
        return whoExcusesMadness[Math.floor(Math.random() * whoExcusesMadness.length)];
    else
        return whoExcusesImpossible[Math.floor(Math.random() * whoExcusesImpossible.length)];
};

const GetExcuseAction = (excuseFactor) => 
{
    let actionExcusesBasic = ['ate', 'peed on', 'crushed', 'broke'];
    let actionExcusesModerated = ['stole', 'hid', 'disguised', 'sold'];
    let actionExcusesExpert = ['vaporized', 'hacked into', 'teleported', 'digitized'];
    let actionExcusesMadness = ['rearranged the molecules of', 'gaslighted', 'transmuted', 'liquidated'];
    let actionExcusesImpossible = ['turned magically into rainbow unicorns', 'erased from the timeline', 'converted into dark matter', 'sold to a parallel universe', 'deleted from the collective memory'];

    if (excuseFactor < excuseBasicCounter)
        return actionExcusesBasic[Math.floor(Math.random() * actionExcusesBasic.length)];
    else if (excuseFactor < excuseModeratedCounter)
        return actionExcusesModerated[Math.floor(Math.random() * actionExcusesModerated.length)];
    else if (excuseFactor < excuseExpertCounter)
        return actionExcusesExpert[Math.floor(Math.random() * actionExcusesExpert.length)];
    else if (excuseFactor < excuseMadnessCounter)
        return actionExcusesMadness[Math.floor(Math.random() * actionExcusesMadness.length)];
    else
        return actionExcusesImpossible[Math.floor(Math.random() * actionExcusesImpossible.length)];
};

const GetExcuseWhat = (excuseFactor) => 
{
    let whatExcusesBasic = ['my homework', 'my phone', 'the car', 'my keys'];
    let whatExcusesModerated = ['my birth certificate', 'my sanity', 'my favorite coffee mug', 'the WiFi password'];
    let whatExcusesExpert = ['my digital soul', 'the source code of reality', 'my crypto wallet', 'the cloud'];
    let whatExcusesMadness = ['my sense of self', 'the laws of physics', 'the concept of Monday', 'my childhood memories'];
    let whatExcusesImpossible = ['the remnants of an ancient alien culture', 'the Big Bang theory', 'the fourth dimension', 'the destiny of humanity', 'the fabric of space-time'];

    if (excuseFactor < excuseBasicCounter)
        return whatExcusesBasic[Math.floor(Math.random() * whatExcusesBasic.length)];
    else if (excuseFactor < excuseModeratedCounter)
        return whatExcusesModerated[Math.floor(Math.random() * whatExcusesModerated.length)];
    else if (excuseFactor < excuseExpertCounter)
        return whatExcusesExpert[Math.floor(Math.random() * whatExcusesExpert.length)];
    else if (excuseFactor < excuseMadnessCounter)
        return whatExcusesMadness[Math.floor(Math.random() * whatExcusesMadness.length)];
    else
        return whatExcusesImpossible[Math.floor(Math.random() * whatExcusesImpossible.length)];
};

const GetExcuseWhen = (excuseFactor) => 
{
    let whenExcusesBasic = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let whenExcusesModerated = ['during my midlife crisis', 'while I was doomscrolling', 'right after the earthquake', 'during a lunar eclipse'];
    let whenExcusesExpert = ['while I was trapped in a Zoom call', 'during the singularity', 'while I was mining Bitcoin', 'in a dream within a dream'];
    let whenExcusesMadness = ['when the clock started ticking backwards', 'during the heat death of the universe', 'while I was transcending this mortal coil', 'before the prophecy was fulfilled'];
    let whenExcusesImpossible = ['at the merge of the primal Github repository creation', 'at the exact moment of the Big Bang', 'in a timeline where I never existed', 'while I was dividing by zero', 'outside the boundaries of space and time'];
    
    if (excuseFactor < excuseBasicCounter)
        return whenExcusesBasic[Math.floor(Math.random() * whenExcusesBasic.length)];
    else if (excuseFactor < excuseModeratedCounter)
        return whenExcusesModerated[Math.floor(Math.random() * whenExcusesModerated.length)];
    else if (excuseFactor < excuseExpertCounter)
        return whenExcusesExpert[Math.floor(Math.random() * whenExcusesExpert.length)];
    else if (excuseFactor < excuseMadnessCounter)
        return whenExcusesMadness[Math.floor(Math.random() * whenExcusesMadness.length)];
    else
        return whenExcusesImpossible[Math.floor(Math.random() * whenExcusesImpossible.length)];
};

const GetExcuseLevelName = (excuseFactor) => {
    if (excuseFactor < excuseBasicCounter) return "Basic";
    else if (excuseFactor < excuseModeratedCounter) return "Moderated";
    else if (excuseFactor < excuseExpertCounter) return "Expert";
    else if (excuseFactor < excuseMadnessCounter) return "Madness";
    else return "Impossible";
};