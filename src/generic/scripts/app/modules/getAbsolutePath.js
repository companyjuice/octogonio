// [MM] chat
const getAbsolutePath = () => 
    '/'

if (typeof(window) !== 'undefined') {

    const isOffline = !!window.location.href.includes('index.html')
    const getAbsolutePath = () =>
        isOffline
            ? window.location.href.split('index.html')[0]
            : '/'

} else {

    const getAbsolutePath = () => '/'

}

export default getAbsolutePath