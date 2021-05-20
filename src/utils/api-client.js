
import { ApolloClient } from '@apollo/client';
import { setContext} from '@apollo/client/link/context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckoriclm9u0bf01xn4a33f2zi/master'
});

const link = (() => {
    return setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjExOTg3NzEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2Nrb3JpY2xtOXUwYmYwMXhuNGEzM2YyemkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiN2Y2ODgwMTktMDI2ZS00N2U3LThhM2UtYWMwZTYzNmZmNjM5IiwianRpIjoiY2tvcm53MjBjNmUwcTAxeG5jeXBxNzVoNiJ9.vCMSyHqazoEv_oJUJVXD641JGL3qFhnbXSivRVYHWEfOtnQlWm8aWxRltbSPBCryCJ0EigZX3sSImBwq5ui9ziD_OcxzlqPtilf7fIFg5HfuxuK7bqiAIMs8QiSU8R3oVfsypGym6Y5ifIxXF375jJ2vtZc9NxqVSsnotmSlPDP5z6oYQ4FWFvxPkBPEuYMDavh_ypPsauWwN8EHOjy2sQ1qCO5sQG43yF8Qf-D7BxNa3TBrsBrCqlE3yzouggFvj2UdrLr786G-K_oEkwl9dam_Icyr-4hBnr1TbobBgvVHVK6WTnN7gWqNZyRFmq0A6EPXiPhFBHfsbzl8N1pe431YeP_ZCpgaujTn7z3kXjmbi8TIzM0Xl8q4KwBM3SBrroFT5J3d6G6BX8khkHyAO5wTALk9LyhKgGMNZRge_eU026E3wlw5kRoyz-MhGadyxKGKKebVO0ugIA9NOAC_HKVTQMPZVmGjN0_--MGgMQJehNaxbG7sdbzW8UIQ8SX_4KHy1VfArwlS23QRYM-Iha572pQABmt9XKV7JUgi91oIN5A8_pIeX0CE6gzfUv2yJyY156Mh-UxzPZba4by5dzBGkU5wx9h6LBHGXUvMexqJWcq62XbEw1aggxSAu-3uF4MBceKuqA8rfIAp9K8XcTeCEivBM-80w1jAyt8vzzA"
          }
        }
      }).concat(httpLink);
})();

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
});
