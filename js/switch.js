
switch (new Date().getDay()) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thusday';
        break;
    case 5:
    case 6:
        day = 'off day';
        break;
    default:
        day = "not found"
}

console.log(day);