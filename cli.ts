import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { Command as CommandBase } from "@gnome/exec/command-base";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("sudo", {
    name: "sudo",
    windows: [
        "${SystemRoot}\\System32\\sudo.exe",
    ],
    linux: [
        "/usr/bin/sudo",
    ],
});

function convertCommand(args?: CommandArgs | CommandBase): CommandArgs | undefined {
    if (args === undefined) {
        return undefined;
    }

    if (args instanceof CommandBase) {
        return args.toArgs();
    }

    return args as CommandArgs;
}

/**
 * Represents a sudo command.
 */
export class SudoCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs | CommandBase, options?: CommandOptions) {
        super("sudo", convertCommand(args), options);
    }
}

/**
 * Creates a new instance of the SudoCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the SudoCommand class.
 */

export function sudo(args?: CommandArgs | CommandBase, options?: CommandOptions): SudoCommand {
    return new SudoCommand(args, options);
}
