export const redirectDonarPaypal = () => {
    window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LC2UM7J6DUZBJ&source=url'
}

export const redirectDonarStripe150 = (recurring: boolean) => {
    if (recurring) {
        window.location.href = 'https://buy.stripe.com/aEU28i8X43NFe1G005'
    }

    window.location.href = 'https://buy.stripe.com/eVa3cmeho0Bt1eUcMO'
}

export const redirectDonarStripe300 = (recurring: boolean) => {
    if (recurring) {
        window.location.href = 'https://buy.stripe.com/5kAbISa18gAraPu8wC'
    }

    window.location.href = 'https://buy.stripe.com/8wMdR05KS1Fx6ze28b'
}

export const redirectDonarStripe500 = (recurring: boolean) => {
    if (recurring) {
        window.location.href = 'https://buy.stripe.com/4gw6oy7T0fwn8Hm14b'
    }

    window.location.href = 'https://buy.stripe.com/28o7sC5KSac3aPu6os'
}