'use client'
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from 'next/dist/shared/lib/constants';
// save as components/PostsLimit.jsx
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
// Client component allowing user to choose the number of posts displayed
// and set new value in search params
const PostsLimit = (defaultLimit) => {
    //state var
    
    const searchParams = useSearchParams(); // next.js hook for search params
    const router = useRouter(); // next.js hook for client side navigation
    const pathname = usePathname(); // next.js hook for current URL path
    
    const limit = searchParams.has('limit') ?
                      searchParams.get('limit') : defaultLimit;
   //func                  
    const handleChangeLimit = (e) => {
        // change the route to the existing path plus the new search param
        router.replace(pathname + '?limit=' + e.target.value);
    };

    const numberOfPostsSelectDisplay = () => {
        const options = [5, 10, 20];
        const optionsDisplay = options.map((option) => {
            return <option key={option}>{oprion}</option>;
        });

        return optionsDisplay;
    };

    const numberOfPagesSelectDisplay = () => {
        const numberOfIterations = defaultLimit;

        for (let i = 1; i <= numberOfIterations; i++) {
            return <option key={i}>{i}</option>;
        }
    };

    return (
        <div>
        <label className="PostsLimit">
            Number of posts:
            <select onChange={handleChangeLimit} value={limit}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
            </select>
        </label>

        <label className='PageToGo'>
                Page to go to:
                <select onChange={() => console.log("page changed", e.target.value)}
                value={1}
                >{numberOfPagesOptionsDisplay()}
                    </select>
        </label>
        </div>
    );
};

export default PostsLimit;