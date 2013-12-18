## Installation and usage

    sudo npm install -g archey

The command is called `archeyjs` to avoid conflicts with the actual `archey` command.

## Examples

Note that the actual output has colors as well.

Ubuntu:

    [archey.js @master] archeyjs
                                .oyhhs:   User: m
                       ..--.., shhhhhh-   Hostname: precise64
                     -+++++++++`:yyhhyo`  OS: Ubuntu 12.04 x64
                .--  -++++++++/-.-::-`    Kernel: 3.8.0-29-generic
              .::::-   :-----:/+++/++/.   Uptime: 1 day 19 hours 30 minutes 59 seconds
             -:::::-.          .:++++++:  Shell: zsh
        ,,, .:::::-`             .++++++- Terminal: screen
      ./+++/-`-::-                ./////: Packages: 1266
      +++++++ .::-                        CPU: Intel(R) Core(TM) i7-3635QM CPU @ 2.40GHz
      ./+++/-`-::-                :yyyyyo Resolution: 3760x1920
        ``` `-::::-`             :yhhhhh: RAM: 3.69GB / 3.86GB
             -:::::-.         `-ohhhhhh+  Disk: 7.4G / 9.2G
              .::::-` -o+///+oyhhyyyhy:
               `.--  /yhhhhhhhy+,....
                     /hhhhhhhhh-.-:::;
                     `.:://::- -:::::;
                               `.-:-'

OS X:

    [m-mbp ~] archeyjs
                    :++++.         User: m
                   /+++/.          Hostname: m-mbp
           .:-::- .+/:-``.::-      OS: OS X 10.8.5 12F45 x64
        .:/++++++/::::/++++++/:`   Kernel: 12.5.0
      .:///////////////////////:`  Uptime: 12 days 7 hours 32 minutes 59 seconds
      ////////////////////////`    Window Manager: Quartz Compositor
     -+++++++++++++++++++++++`     Shell: zsh
     /++++++++++++++++++++++/      Terminal: screen
     /sssssssssssssssssssssss.     Packages: 10
     :ssssssssssssssssssssssss-    CPU: MacBookPro10,1
      osssssssssssssssssssssssso/` Resolution: 1200x1920, 2560x1440
      `syyyyyyyyyyyyyyyyyyyyyyyy+` RAM: 7.83gb / 8gb
       `ossssssssssssssssssssss/   Disk: 40G / 210G
         :ooooooooooooooooooo+.
          `:+oo+/:-..-:/+o+/-

Windows:

    C:\>archeyjs
            ,.=:!!t3Z3z.,                User: m
           :tt:::tt333EE3                Hostname: m-THINK
           Et:::ztt33EEEL @Ee.,      .., OS: Microsoft Windows 7 Professional
          ;tt:::tt333EE7 ;EEEEEEttttt33# Kernel: 6.1.7601 x64
         :Et:::zt333EEQ. $EEEEEttttt33QL Uptime: 3 days 16 hours
         it::::tt333EEF @EEEEEEttttt33F  Window Manager: DWM
        ;3=*^```"*4EEV :EEEEEEttttt33@.  Desktop Environment: Aero
        ,.=::::!t=., ` @EEEEEEtttz33QF   CPU: Intel i7-2720QM CPU @ 2.20GHz
       ;::::::::zt33)   "4EEEtttji3P*    Resolution: 1920x1080
      :t::::::::tt33.:Z3z..  `` ,..g.    RAM: 10.53gb / 15.95gb
      i::::::::zt33F AEEEtttt::::ztF     Disk: 964.37gb / 1132.53gb
     ;:::::::::t33V ;EEEttttt::::t3
     E::::::::zt33L @EEEtttt::::z3F
    {3=*^```"*4E3) ;EEEtttt:::::tZ`
                 ` :EEEEtttt::::z7
                     "VEzjt:;;z>*`

Also includes logos for Arch Linux, CrunchBang, Debian, Fedora, Mint and Windows.

Options:

    --logo <name>   Display the logo for a specific distribution.
    --gallery       Display all the logos.
    --help          Show help.
    --version       Show version.

## Credits

Based on Archey by Melik Manukyan and screenfetch by Brett Bohnenkamper. The Archey and screenfetch credits mention the following people, so I want to acknowledge them here as well:

- ASCII art by Brett Bohnenkamper
- Changes by Jerome Launay
- Fedora support by YeOK
- OS X proting by shrx and Hu6

I figured I'd better not include their email addresses here given that this is a separate project.
