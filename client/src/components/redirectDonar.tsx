export const redirectDonarPaypal = () => {
    window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LC2UM7J6DUZBJ&source=url'
}

const isStripeTest: boolean = false

interface IRedirectUrls {
    simple: string
    recurring: string
}

const stripeUrlsTest = {
    url100: {
        recurring: 'https://buy.stripe.com/test_aEU7t831X1xA2l26oo',
        simple: 'https://buy.stripe.com/test_fZeaFk9ql5NQ9Nu8wx'
    },
    url150: {
        recurring: 'https://buy.stripe.com/test_aEU7t831X1xA2l26oo',
        simple: 'https://buy.stripe.com/test_fZeaFk9ql5NQ9Nu8wx'
    },
    url300: {
        recurring: 'https://buy.stripe.com/test_aEU7t831X1xA2l26oo',
        simple: 'https://buy.stripe.com/test_fZeaFk9ql5NQ9Nu8wx'
    },
    url500: {
        recurring: 'https://buy.stripe.com/test_aEU7t831X1xA2l26oo',
        simple: 'https://buy.stripe.com/test_fZeaFk9ql5NQ9Nu8wx'
    },
}

let stripeUrls = {
    url100: {
        recurring: 'https://buy.stripe.com/dR6fZ87T03NF9LqbIR',
        simple: 'https://buy.stripe.com/bIY00a8X42JBcXC9AI'
    },
    url150: {
        recurring: 'https://buy.stripe.com/aEU28i8X43NFe1G005',
        simple: 'https://buy.stripe.com/eVa3cmeho0Bt1eUcMO'
    },
    url300: {
        recurring: 'https://buy.stripe.com/5kAbISa18gAraPu8wC',
        simple: 'https://buy.stripe.com/8wMdR05KS1Fx6ze28b'
    },
    url500: {
        recurring: 'https://buy.stripe.com/4gw6oy7T0fwn8Hm14b',
        simple: 'https://buy.stripe.com/28o7sC5KSac3aPu6os'
    },
}

// Only when testing
if (isStripeTest) {
    stripeUrls = stripeUrlsTest
}

const redirectTo = (recurring: boolean, urls: IRedirectUrls) => {
    if (recurring) {
        window.location.href = urls.recurring
        return
    }

    window.location.href = urls.simple
}

export const redirectDonarStripe100Variable = (recurring: boolean) => {
    redirectTo(recurring, stripeUrls.url100)
}

export const redirectDonarStripe150 = (recurring: boolean) => {
    redirectTo(recurring, stripeUrls.url150)
}

export const redirectDonarStripe300 = (recurring: boolean) => {
    redirectTo(recurring, stripeUrls.url300)
}

export const redirectDonarStripe500 = (recurring: boolean) => {
    redirectTo(recurring, stripeUrls.url500)
}
