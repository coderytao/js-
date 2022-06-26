const message="hello world"

//stringpading->对字符串首尾进行填充
const newMessage=message.padEnd(14,'*').padEnd(20,'-')


//案列=>身份证的截取
const cardnumber="1989028098908905439"

const lastFourCard=cardnumber.slice(-4)//对字符串尾数四位进行填取

const finalCard=lastFourCard.padStart(cardnumber.length,'*')