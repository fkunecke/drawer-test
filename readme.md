This is a test of the react native drawer module being built locally.

first:

    cd /some-directory
    git clone https://github.com/fkunecke/drawer
    cd drawer
    yarn

Now, to get this working:

    cd /some-directory
    git clone https://github.com/fkunecke/drawer-test
    cd drawer-test
    npm install

To start the react native app:
    npm start


I'm not totally confident that I'm doing the right steps to get my branch of react-navigation-drawer working with Expo - I have not yet tried in an unmanaged react native project. From what I understand this seems to be some kind of environment issue wrt to my react native version?

When I run npm install react-navigation-drawer, everything works. So my particular issue is that I'm unable to correctly build react-navigation-drawer locally for use in an expo project.
