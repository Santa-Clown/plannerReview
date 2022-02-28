<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpArxidampouras' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('WP_ALLOW_REPAIR', true);

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&^jqBL6kBB_JAyN1D/qnn$X>[Psv;/%+ggjw;_vD|7~KHml{}(!A J~6UH>(St}f' );
define( 'SECURE_AUTH_KEY',  '`L(;_wH;3fm(#(lMIB9 mqhDE`6k!`*$0oPN7Z;`,+Gs;xp<dN~gqc6e:bqv;0c+' );
define( 'LOGGED_IN_KEY',    '8BF0dz?sT)I~5HK!AGs2]gEnzd.@y}ft-5vo3s(48|F5;]ndM1X{P+MHt{,!Eq|u' );
define( 'NONCE_KEY',        'UR8PC(TsSB;@R).1h:P0e+({a>+^lc)#Kqqa1w*nr:|o^_<~f0LQmc[#XK!Sk#1/' );
define( 'AUTH_SALT',        'ok{%=Up2+i?w/:X5g}}3[ FMQ@C%gJoE0}8Ye2htrp5aR`fB0o@Nzmp3a5U-W Bi' );
define( 'SECURE_AUTH_SALT', 'j5J/HjXju]|@Q$q76#LEWv%ciMNT}tN!fiWz!1_/v,5x.F_iHPKqn:5%[Oq*t,ju' );
define( 'LOGGED_IN_SALT',   '#Hqn@PG01.84icz;!XqfvBc6Jv!9H/O$Tb`4K$$p#eVA9[L-C-qEzI#I;Dc#?HZ.' );
define( 'NONCE_SALT',       '-^ ucho5Iu~lSh4iB~ryJs./k,i2g]:)3NuLF_[!D,6vL`A=&gNM/9)nvkM`>s#^' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';