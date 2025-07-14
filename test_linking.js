// Test script to verify the linking logic
const testEvents = [
    { eventName: "Orientation", eventType: "agenda", weekday: "Monday" },
    { eventName: "Participant Flex Time and Dinner", eventType: "agenda", weekday: "Tuesday" },
    { eventName: "Musical Program", eventType: "agenda", weekday: "Thursday" },
    { eventName: "Variety Show", eventType: "agenda", weekday: "Thursday" },
    { eventName: "Variety Show Guidelines", eventType: "agenda", weekday: "Thursday" },
    { eventName: "Young Men Morning Devotional and Young Women Activity", eventType: "agenda", weekday: "Thursday" },
    { eventName: "Young Women Morning Devotional and Young Men Activity", eventType: "agenda", weekday: "Thursday" },
    { eventName: "Orientation", eventType: "duty", weekday: "Monday" },
    { eventName: "Flex Time Coordinator", eventType: "duty", weekday: "Tuesday" },
    { eventName: "Musical Program Coordinator", eventType: "duty", weekday: "Thursday" },
    { eventName: "Variety Show Coordinator", eventType: "duty", weekday: "Thursday" },
    { eventName: "Class Coordinator", eventType: "duty", weekday: "Tuesday" },
    { eventName: "Class Support", eventType: "duty", weekday: "Tuesday" },
    { eventName: "Class Coordinator / CN Coordination Meeting", eventType: "duty", weekday: "Tuesday" },
    { eventName: "YM/YW Activity Coordinator", eventType: "duty", weekday: "Thursday" },
    { eventName: "YM//YW Activity Support", eventType: "duty", weekday: "Thursday" },
    { eventName: "YM Activity / Time-Off", eventType: "duty", weekday: "Thursday" },
    { eventName: "YW Activity / Time-Off", eventType: "duty", weekday: "Thursday" }
];

function testKeywordMatching() {
    console.log("Testing keyword matching for edge cases...");
    
    // Test 1: Flex Time
    const flexAgenda = "Participant Flex Time and Dinner";
    const flexDuty = "Flex Time Coordinator";
    const flexKeywords = [];
    if (flexAgenda.includes('Flex Time') || flexAgenda.includes('Participant Flex Time')) {
        flexKeywords.push('Flex Time');
    }
    console.log("1. Flex Time - Keywords:", flexKeywords);
    console.log("   Should match 'Flex Time Coordinator':", flexKeywords.some(k => flexDuty.includes(k)));
    
    // Test 2: YM/YW Activity
    const ymAgenda = "Young Men Morning Devotional and Young Women Activity";
    const ymDuty = "YM/YW Activity Coordinator";
    const ymKeywords = [];
    if (ymAgenda.includes('Young Men Morning Devotional and Young Women Activity')) {
        ymKeywords.push('YM', 'YW', 'YM/YW', 'YM//YW', 'Young Men', 'Young Women');
    }
    console.log("2. YM Activity - Keywords:", ymKeywords);
    console.log("   Should match 'YM/YW Activity Coordinator':", ymKeywords.some(k => ymDuty.includes(k)));
    
    // Test 3: Class events
    const classCoordinator = "Class Coordinator";
    const classSupport = "Class Support";
    const classMeeting = "Class Coordinator / CN Coordination Meeting";
    console.log("3. Class events should all be linked together:");
    console.log("   Coordinator includes 'Class':", classCoordinator.includes('Class'));
    console.log("   Support includes 'Class':", classSupport.includes('Class'));
    console.log("   Meeting includes 'Class':", classMeeting.includes('Class'));
}

testKeywordMatching();
