import sys

modes = [
    'standalone'
]

if len(sys.argv) >= 2:
    mode = sys.argv[1]
    if mode not in modes:
        print 'Please pass one of these arguments'
        print '    standalone: if you want to explicitly run the server'
        sys.exit()
    else:
        print 'Starting application in %s mode' % mode

    # Start this server only if it is standalone.

    from app import app

    # Start the server
    app.run(debug=True)
